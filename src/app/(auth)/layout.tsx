import { AuthHeader } from './_components/AuthHeader';

type LayoutPops = {
  children: React.ReactNode;
};
export default function AuthLayout({ children }: LayoutPops) {
  return (
    <div className='flex w-screen flex-col items-center'>
      <AuthHeader />
      {children}
    </div>
  );
}
