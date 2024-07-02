import { LogoTxtSVG } from '@/components/svg/LogoSVG';
import Link from 'next/link';

export const AuthHeader = () => {
  return (
    <header>
      <Link href='/' className='flex h-20 items-center justify-center mb-[60px]'>
        <LogoTxtSVG />
      </Link>
    </header>
  );
};
