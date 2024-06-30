import { VisibilitySVG } from '@/components/svg/VisibilitySVG';
import { InvisibilitySVG } from '@/components/svg/InvisibilitySVG';
import { useToggleHandler } from '@/app/hooks/useToggleHandler';

export const VisibilityButtonIcon = () => {
  const { value: isVisible, handleValue: handleIsVisible } = useToggleHandler();
  const ButtonIcon = () => (
    <button type='button' onClick={handleIsVisible}>
      {isVisible ? <VisibilitySVG /> : <InvisibilitySVG />}
    </button>
  );
  const visibility: 'password' | 'text' = isVisible ? 'text' : 'password';
  return { visibility, ButtonIcon };
};
