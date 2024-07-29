import { OptionButton } from '@/components/atoms/button/OptionButton';
type UserDropdownOptionProps = {
  label: string;
  href: string;
};
const UserDropdownOptions: UserDropdownOptionProps[] = [
  { label: '내 프로필', href: '/profile/[userid]' },
  { label: '내 계정', href: '/myaccount/[userid]' },
  { label: '공지사항', href: '/notices' },
  { label: '기타 설정', href: '/settings' },
  { label: '로그아웃', href: '/login' },
];
export const UserDropdownMenu = () => {
  return (
    <div className='w-300 absolute right-1/2 z-20 flex translate-x-[50%] flex-col overflow-hidden rounded-3xl bg-white shadow-[0_-4px_6px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1)]'>
      {UserDropdownOptions.map((option, idx) => {
        return (
          <OptionButton className='w-[300px]' key={idx}>
            {option.label}
          </OptionButton>
        );
      })}
    </div>
  );
};
