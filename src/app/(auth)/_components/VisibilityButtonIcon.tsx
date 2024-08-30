'use client';
import { VisibilitySVG } from '@/components/svg/VisibilitySVG';
import { useToggleHandler } from '@/hooks/useToggleHandler';

export const VisibilityButtonIcon = () => {
  const { value: isVisible, handleValue: handleIsVisible } = useToggleHandler();
  const ButtonIcon = () => (
    <button type='button' onClick={handleIsVisible}>
      {isVisible ? <VisibilitySVG /> : <VisibilitySVG isVisible={false} />}
    </button>
  );
  const visibility: 'password' | 'text' = isVisible ? 'text' : 'password';
  return { visibility, ButtonIcon };
};
