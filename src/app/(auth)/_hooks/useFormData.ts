import {
  ChagePasswordType,
  LoginFormType,
  ProfileEditType,
  SignupFormType,
} from '@/types/authType';
import { SubmitHandler, useForm } from 'react-hook-form';
import { changePassword, editUserProfile, login, signup } from './useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  changePasswordSchema,
  loginSchema,
  profileEditSchema,
  signupSchema,
} from '@/utils/zodSchema';
export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    const response = await login(data);
    if (response) {
      window.location.href = `${response.url}`;
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};

export const useSignup = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<SignupFormType>({
    mode: 'onChange',
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<SignupFormType> = async (data) => {
    const { acceptPrivacyPolicy, acceptTerms, code } = data;
    if (acceptPrivacyPolicy && acceptTerms && code) {
      const response = await signup(data);
      console.log('서버 응답값', response);
      //이
      if (response.statusCode) {
        alert(response.message);
      }
      if (!response.statusCode) {
        alert('회원가입이 완료되셨습니다.');
        window.location.href = '/login';
      }
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    watch,
    errors,
    setValue,
    trigger,
  };
};
export const useProfileEdit = () => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<ProfileEditType>({
    mode: 'onBlur',
    resolver: zodResolver(profileEditSchema),
  });
  const onSubmit: SubmitHandler<ProfileEditType> = async (data) => {
    console.log('Submitted data:', data);
    const response = await editUserProfile(data);
    console.log(response);
    console.log('res data', data);
  };
  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    watch,
    trigger,
    errors,
  };
};

export const useChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChagePasswordType>({
    mode: 'onBlur',
    resolver: zodResolver(changePasswordSchema),
  });
  const onSubmit: SubmitHandler<ChagePasswordType> = async (data) => {
    try {
      console.log('try', data);
      const response = await changePassword(data);
      console.log('end');

      console.log('Response:', response);
    } catch (error) {
      console.error('Error changing password:', error);
    }
  };
  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};
