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
    <footer className='py-10'>
      <div className='flex gap-[10px]'>
        {subButton ? (
          <>
            <Button size='small' onClick={onMainClick}>
              {mainButton}
            </Button>
            <Button variant='stroke' size='small' onClick={onSubClick}>
              {subButton}
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
