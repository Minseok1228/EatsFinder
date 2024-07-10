import { LoginFormType, SignupFormType } from '@/types/authType';
import { SubmitHandler, useForm } from 'react-hook-form';
import { login, signup } from './useAuth';
export const useLogin = () => {
  const { register, handleSubmit, resetField } = useForm<LoginFormType>();
  // const resetInput = () => {
  //   resetField('email');
  //   resetField('password');
  // };
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
  };
};
export const useSignup = () => {
  const { register, handleSubmit, resetField, watch } =
    useForm<SignupFormType>();
  const resetInput = () => {
    resetField('name');
    resetField('nickname');
    resetField('password');
    resetField('passwordCheck');
    resetField('phoneNumber');
  };
  const onSubmit: SubmitHandler<SignupFormType> = async (data) => {
    const res = await signup(data);
    console.log(res);
    resetInput();
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    watch,
  };
};
