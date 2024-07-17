type LayoutPops = {
  children: React.ReactNode;
};
export default function AuthLayout({ children }: LayoutPops) {
  return (
    <div className='flex select-none flex-col items-center'>{children}</div>
  );
}
