import { LoginFormType } from '@/app/types/authType';
import { SubmitHandler, useForm } from 'react-hook-form';
export const useLogin = () => {
  const onSubmit: SubmitHandler<LoginFormType> = (data) => console.log(data);
  const { register, handleSubmit } = useForm<LoginFormType>();
  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
  };
};
