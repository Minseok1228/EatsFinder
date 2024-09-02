import { CheckBoxSVG } from '@/components/svg/CheckBoxSVG';
import { useSaveLoginState } from '../../_hooks/useSaveLoginState';

export const SaveLoginState = () => {
  const { loginSave, handleLoginSave } = useSaveLoginState();
  return (
    <button
      type='button'
      onClick={handleLoginSave}
      className='flex items-center gap-1'
    >
      {loginSave ? (
        <CheckBoxSVG isChecked='check' />
      ) : (
        <CheckBoxSVG isChecked='default' />
      )}
      <span>로그인상태 저장</span>
    </button>
  );
};
