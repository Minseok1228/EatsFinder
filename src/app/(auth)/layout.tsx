import { Spacer } from '@/components/atoms/spacer/Spacer';
import { AuthHeader } from './_components/AuthHeader';

type LayoutPops = {
  children: React.ReactNode;
};
export default function AuthLayout({ children }: LayoutPops) {
  return (
    <div className='flex w-screen flex-col items-center'>
      <AuthHeader />
      <Spacer y={60} />
      {children}
    </div>
  );
}
