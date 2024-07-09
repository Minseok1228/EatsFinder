import { ProfileImage } from '@/components/atoms';
import { Button } from '@/components/atoms';
export const FollowCard = () => {
  return (
    <div className='border-1 flex h-[300px] flex-col items-center justify-center gap-6 rounded-3xl border border-gray-200 p-[10px]'>
      <div className='flex w-[100px] flex-col items-center gap-2'>
        <ProfileImage size={100} />
        <div className='subTitle-20'>betty_eat</div>
      </div>
      <Button size='mini' className='h-[50px] w-[200px] rounded-3xl'>
        팔로우
      </Button>
    </div>
  );
};
