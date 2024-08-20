import { KOTLIN_SERVER, NEST_SERVER } from '@/constants/baseUrl';
import {
  ChagePasswordType,
  LoginFormType,
  ProfileEditType,
  SignupFormType,
} from '@/types/authType';
import { SignupType } from '@/types/authType';
import { getUserToken } from '@/utils/getUserInfo';
import { UseFormSetValue, UseFormTrigger, UseFormWatch } from 'react-hook-form';
const accessToken = getUserToken();

export const login = async (data: LoginFormType) => {
  const { email, password } = data;
  const response = await fetch(`api/auth/login`, {
    method: 'POST',
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return response;
};

export const signup = async (data: SignupType) => {
  const { email, name, nickname, password, phoneNumber } = data;
  const response = await fetch(`${NEST_SERVER}/auth/signup`, {
    method: 'POST',
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      phoneNumber,
      email,
      password,
      nickname,
      profileImage: null,
    }),
  });
  return response.json();
};
export const isDuplicatedNickname = async (nickname: string) => {
  const response = await fetch(`${NEST_SERVER}/users/nickname/${nickname}`, {
    method: 'GET',
    headers: {
      accept: '*/*',
    },
  });
  return response.json();
};
type isDuplicatedNicknameProps = {
  setValue: UseFormSetValue<SignupFormType>;
  trigger: UseFormTrigger<SignupFormType>;
  watch: UseFormWatch<SignupFormType>;
};
export const useNicknameDuplicateCheck = () => {
  const handleNicknameChecker = async ({
    watch,
    setValue,
    trigger,
  }: isDuplicatedNicknameProps) => {
    const response = await isDuplicatedNickname(watch('nickname'));
    if (response.error) {
      setValue('nicknameDuplicated', false);
      trigger('nicknameDuplicated');
      console.log(response.message);
    } else {
      setValue('nicknameDuplicated', true);
      trigger('nicknameDuplicated');
      console.log(response.message);
    }
  };
  return { handleNicknameChecker };
};

export const editUserProfile = async (data: ProfileEditType) => {
  const { nickname, phoneNumber } = data;
  const formData = new FormData();
  formData.append('nickname', nickname);
  formData.append('phoneNumber', phoneNumber);
  formData.append('profileImage', '');
  console.log('cccc');
  const response = await fetch(`${KOTLIN_SERVER}/my-profile`, {
    method: 'PATCH',
    headers: {
      accept: '*/*',
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  });
  console.log('dddd');

  return response.json();
};
export const changePassword = async (data: ChagePasswordType) => {
  const { password, passwordCheck } = data;
  const token = await accessToken;
  console.log('토큰', token);
  const response = await fetch(`${KOTLIN_SERVER}/my-profile/new-password`, {
    method: 'PUT',
    headers: {
      accept: '*/*',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      newPassword: password,
      passwordConfirm: passwordCheck,
    }),
  });
  return response.json();
};
