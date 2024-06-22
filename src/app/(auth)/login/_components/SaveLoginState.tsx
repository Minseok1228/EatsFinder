import {
  CheckBoxCheckedSVG,
  CheckBoxDefaultSVG,
} from '@/components/svg/CheckBoxSVG';
import { useState } from 'react';

export const SaveLoginState = () => {
  const [loginSave, setLoginSave] = useState<boolean>(false);
  const handleLoginSave = () => {
    setLoginSave((prev) => !prev);
  };
  return (
    <button onClick={handleLoginSave} className='flex items-center gap-1'>
      {loginSave ? <CheckBoxDefaultSVG /> : <CheckBoxCheckedSVG />}
      <span>로그인상태 저장</span>
    </button>
  );
};
