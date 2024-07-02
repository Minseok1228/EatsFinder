type RecentLoginMsgProps = {
  recentLogin: boolean;
};
export const RecentLoginMsg = ({ recentLogin }: RecentLoginMsgProps) => {
  if (!recentLogin) return;
  return (
    <div className='relative mt-1'>
      <div className='absolute inset-x-0 flex flex-col items-center'>
        <div className='h-0 w-0 border-b-8 border-l-4 border-r-4 border-b-gray-50 border-l-transparent border-r-transparent'></div>
        <div className='flex h-10 w-[85px] items-center justify-center rounded-xl bg-gray-50'>
          <p className='text-gray-600 body-14'>최근 로그인</p>
        </div>
      </div>
    </div>
  );
};
