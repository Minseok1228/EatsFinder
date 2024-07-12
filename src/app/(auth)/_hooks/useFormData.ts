import { LoginFormType, SignupFormType } from '@/types/authType';
import { SubmitHandler, useForm } from 'react-hook-form';
import { login, signup } from './useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, signupSchema } from '@/utils/zodSchema';
export const useLogin = () => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<LoginFormType>({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    const res = await login(data);
    const accessToken = res.accessToken;
    console.log(res);
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
export const useSignup = () => {
  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm<SignupFormType>({
    mode: 'onBlur',
    resolver: zodResolver(signupSchema),
  });
  const resetInput = () => {
    resetField('name');
    resetField('nickname');
    resetField('password');
    resetField('passwordCheck');
    resetField('phoneNumber');
  };
  //statuscode에 따른 값
  const onSubmit: SubmitHandler<SignupFormType> = async (data) => {
    const res = await signup(data);
    console.log(res);
    if (res.statusCode) {
      alert(res.message);
    }
    if (!res.statusCode) {
      alert('회원가입이 완료되셨습니다.');
      window.location.href = '/login';
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    watch,
    errors,
  };
};
