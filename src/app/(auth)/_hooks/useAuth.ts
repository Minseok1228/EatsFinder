import { NODE_SERVER } from '@/constants/baseUrl';
import { LoginFormType, SignupFormType } from '@/types/authType';
import { SignupType } from '@/types/authType';
import { UseFormSetValue, UseFormTrigger, UseFormWatch } from 'react-hook-form';

export const login = async (data: LoginFormType) => {
  const { email, password } = data;
  const response = await fetch(`${NODE_SERVER}/auth/login`, {
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
  return response.json();
};

export const signup = async (data: SignupType) => {
  const { email, name, nickname, password, phoneNumber } = data;
  const response = await fetch(`${NODE_SERVER}/auth/signup`, {
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
  const response = await fetch(`${NODE_SERVER}/users/nickname/${nickname}`, {
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
export const useNicknameDuplicateCheck = async ({
  watch,
  setValue,
  trigger,
}: isDuplicatedNicknameProps) => {
  console.log(watch('nickname'));
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
