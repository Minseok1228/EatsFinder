import { LoginFormType, SignupFormType } from '@/types/authType';
import { SubmitHandler, useForm } from 'react-hook-form';
export const useLogin = () => {
  const { register, handleSubmit, resetField } = useForm<LoginFormType>();
  const resetInput = () => {
    resetField('email');
    resetField('password');
  };
  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    console.log(data);
    resetInput();
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
  const onSubmit: SubmitHandler<SignupFormType> = (data) => {
    console.log(data);
    resetInput();
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    watch,
  };
};
