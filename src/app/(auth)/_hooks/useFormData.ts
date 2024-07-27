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
    const accessToken = response.accessToken;
    console.log(response);
    if (accessToken) {
      window.location.href = '/';
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
};
/**
 * code도 boolean => 인증메세지 받으면 true
 * 모든 폼이 작성되고, accept랑 code가 true 일경우에만 발송
 */
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
