import { LoginFormType } from '@/app/types/authType';
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
