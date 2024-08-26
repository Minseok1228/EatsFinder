'use client';
import { Button } from '@/components/atoms';

interface ModalFooterProps {
  mainButton: string;
  subButton?: string;
  onMainClick: () => void;
  onSubClick?: () => void;
}

export const ModalFooter = ({
  mainButton,
  subButton,
  onMainClick,
  onSubClick,
}: ModalFooterProps) => {
  return (
    <footer className='select-none py-10'>
      <div className='flex items-center justify-center gap-[10px]'>
        {subButton ? (
          <>
            <Button variant='stroke' size='small' onClick={onSubClick}>
              {subButton}
            </Button>
            <Button size='small' onClick={onMainClick}>
              {mainButton}
            </Button>
          </>
        ) : (
          <Button size='medium' onClick={onMainClick}>
            {mainButton}
          </Button>
        )}
      </div>
    </footer>
  );
};
