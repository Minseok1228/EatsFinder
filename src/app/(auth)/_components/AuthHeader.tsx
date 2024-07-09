import { LogoTxtSVG } from '@/components/svg/LogoSVG';
import Link from 'next/link';

export const AuthHeader = () => {
  return (
    <header className='mb-[60px] flex h-20 items-center justify-center'>
      <Link href='/'>
        <LogoTxtSVG />
      </Link>
    </header>
  );
};
