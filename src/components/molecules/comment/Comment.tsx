import { ProfileImage } from '@/components/atoms';
import { ThumbsSVG } from '@/components/svg/ThumbsSVG';
import { customTwMerge } from '@/utils/customTwMerge';

interface CommentProps {
  isLiked?: boolean;
  isAuthor?: boolean;
}

export const Comment = ({
  isLiked = false,
  isAuthor = false,
}: CommentProps) => {
  return (
    <div
      className={customTwMerge(
        'flex rounded-3xl p-5',
        isAuthor && 'bg-gray-50',
      )}
    >
      <div className='mr-6 flex items-center'>
        <ProfileImage size={70} />
      </div>
      <div className='flex flex-col gap-3'>
        <div>
          <span className='mr-3 text-gray-600 subTitle-18'>민정6632</span>
          <span className='text-gray-300 body-16'>2개월전</span>
        </div>
        <p className='break-normal text-gray-600 body-20'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sint
          nobis accusamus eius minus cumque at inventore? Dolorem tempora
          accusamus nam quasi itaque commodi ex sed. Voluptas soluta quas
          assumenda.
        </p>
        <div className='flex items-center gap-2'>
          <div
            className={customTwMerge(
              '[&>svg]:h-[18px] [&>svg]:w-[18px]',
              isLiked ? 'fill-primary-400' : 'fill-gray-400',
            )}
          >
            <ThumbsSVG />
          </div>
          <span className='text-gray-300 body-16'>24</span>
        </div>
      </div>
    </div>
  );
};
