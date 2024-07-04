import { useToggleHandler } from '@/hooks/useToggleHandler';

export const useSaveLoginState = () => {
  const { value: loginSave, handleValue: handleLoginSave } = useToggleHandler();
  return { loginSave, handleLoginSave };
};
