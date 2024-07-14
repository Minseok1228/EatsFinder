import { ImageCarousel } from '@/components/organisms';
import UserProfile from './UserProfile';
import StoreInfo from './StoreInfo';
import StoreMap from './StoreMap';
import Keywords from './Keywords';

const PostContent = () => {
  return (
    <section className='mb-20 grid grid-cols-2 gap-6'>
      <div className='overflow-hidden rounded-s-3xl'>
        <ImageCarousel />
      </div>
      <div className='flex flex-col gap-3 py-7'>
        <UserProfile />
        <p className='min-h-[150px] rounded-3xl border border-gray-100 px-[20px] py-[10px] text-gray-700 body-16'>
          안녕하세요 소개글입니다.
        </p>
        <StoreInfo />
        <StoreMap />
        <Keywords />
      </div>
    </section>
  );
};

export default PostContent;
