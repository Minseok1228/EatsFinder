type LayoutPops = {
  children: React.ReactNode;
};
export default function LoginLayout({ children }: LayoutPops) {
  return <div className='flex w-screen flex-col items-center'>{children}</div>;
}
