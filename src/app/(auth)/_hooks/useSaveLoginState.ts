import { useState } from 'react';
import { useToggleHandler } from './useToggleHandler';

export const useSaveLoginState = () => {
  const { value: loginSave, handleValue: handleLoginSave } = useToggleHandler();
  return { loginSave, handleLoginSave };
};
