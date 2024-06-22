import { useState } from 'react';

export const saveLoginState = () => {
  const [loginSave, setLoginSave] = useState<boolean>(false);
  return { loginSave, setLoginSave };
};
