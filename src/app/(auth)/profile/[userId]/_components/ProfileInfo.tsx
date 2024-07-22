const user = {
  nickname: '민석',
  email: 'minsuk815@naver.com',
  phoneNumber: '010-1234-5678',
};
export const ProfileInfo = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <p className='text-gray-700 title-26'>{user.nickname}</p>
      <p className='text-gray-500 body-16'>{user.email}</p>
      <p className='text-gray-500 body-16'>{user.phoneNumber}</p>
    </div>
  );
};
