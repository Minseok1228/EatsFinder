type ProfileInfoProps = {
  nickname: string;
  email: string;
  phoneNumber: string;
};
export const ProfileInfo = ({
  nickname,
  email,
  phoneNumber,
}: ProfileInfoProps) => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <p className='text-gray-700 title-26'>{nickname}</p>
      <p className='text-gray-500 body-16'>{email}</p>
      <p className='text-gray-500 body-16'>{phoneNumber}</p>
    </div>
  );
};
