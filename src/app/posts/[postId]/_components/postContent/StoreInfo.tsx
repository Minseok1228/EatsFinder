import { Chip } from '@/components/atoms';
import { RatingstarFillSVG } from '@/components/svg/RatingstarSVG';

interface StoreInfoProps {
  name: string;
  starRatings: number;
  menuTag: string[];
}

const StoreInfo = ({ name, starRatings, menuTag }: StoreInfoProps) => {
  return (
    <div>
      <div className='grid grid-cols-2 divide-x divide-gray-100'>
        <div className='flex flex-col items-center justify-center gap-2 p-[10px]'>
          <div className='text-center text-gray-600 subTitle-18'>가게 이름</div>
          <div className='text-gray-700 body-16'>{name}</div>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 p-[10px]'>
          <div className='text-center text-gray-600 subTitle-18'>별점</div>
          <div className='flex items-center gap-1 text-primary-400 subTitle-20'>
            <span>
              <RatingstarFillSVG />
            </span>
            <span>{starRatings}</span>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center gap-2 py-[18px]'>
        {menuTag.map((menu) => (
          <Chip key={menu} text={menu} />
        ))}
      </div>
    </div>
  );
};

export default StoreInfo;
