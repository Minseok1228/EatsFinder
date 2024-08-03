import { LoginFormType, SignupFormType } from '@/types/authType';
import { SubmitHandler, useForm } from 'react-hook-form';
import { login, signup } from './useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, signupSchema } from '@/utils/zodSchema';
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

  //statuscode에 따른 값
  const onSubmit: SubmitHandler<SignupFormType> = async (data) => {
    const { acceptPrivacyPolicy, acceptTerms, code } = data;
    if (acceptPrivacyPolicy && acceptTerms && code) {
      const response = await signup(data);
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
