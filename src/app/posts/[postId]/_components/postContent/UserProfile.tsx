import { ProfileImage, Checkbox } from '@/components/atoms';
import { ShareSVG } from '@/components/svg/ShareSVG';
import { MoreSVG } from '@/components/svg/MoreSVG';

interface UserProfileProps {
  nickname: string;
  profileImage: string | null;
}

const UserProfile = ({ nickname, profileImage }: UserProfileProps) => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-3'>
        <ProfileImage size={70} src={profileImage} />
        <span>{nickname}</span>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <button className='[&>svg]:h-9 [&>svg]:w-9' aria-label='more'>
          <MoreSVG />
        </button>
        <Checkbox variant='fav' className='[&_svg]:h-9 [&_svg]:w-9' />
        <button className='[&>svg]:h-9 [&>svg]:w-9' aria-label='share'>
          <ShareSVG />
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
