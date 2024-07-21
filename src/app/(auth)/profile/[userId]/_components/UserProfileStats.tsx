const userStats = {
  post: 0,
  follower: 0,
  follow: 0,
};
export const UserProfileStats = () => {
  return (
    <div className='flex gap-[30px] text-gray-700 subTitle-20'>
      <p className='p-[10px]'>게시물 {userStats.post}</p>
      <p className='p-[10px]'>팔로잉 {userStats.follow}</p>
      <p className='p-[10px]'>팔로우 {userStats.follower}</p>
    </div>
  );
};
