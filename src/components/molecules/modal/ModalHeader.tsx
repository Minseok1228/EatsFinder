'use client';
import { CloseSVG } from '@/components/svg/CloseSVG';

interface ModalHeaderProps {
  title: string;
  subTitle: string;
  onClose: () => void;
}

export const ModalHeader = ({ title, subTitle, onClose }: ModalHeaderProps) => {
  return (
    <header className='relative py-10'>
      <h1 className='mb-1 text-center text-gray-800 title-34'>{title}</h1>
      <h2 className='text-center text-gray-300 body-16'>{subTitle}</h2>
      <button
        className='absolute left-10 top-10 h-6 w-6'
        onClick={onClose}
        aria-label='close modal'
      >
        <CloseSVG />
      </button>
    </header>
  );
};
