import {
  CheckBoxCheckedSVG,
  CheckBoxDefaultSVG,
} from '@/components/svg/CheckBoxSVG';
import { useSaveLoginState } from '../../_hooks/useSaveLoginState';

export const SaveLoginState = () => {
  const { loginSave, handleLoginSave } = useSaveLoginState();
  console.log(loginSave);
  return (
    <button
      type='button'
      onClick={handleLoginSave}
      className='flex items-center gap-1'
    >
      {loginSave ? <CheckBoxCheckedSVG /> : <CheckBoxDefaultSVG />}
      <span>로그인상태 저장</span>
    </button>
  );
};
