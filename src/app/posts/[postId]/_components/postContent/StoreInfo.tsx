import { RatingstarFillSVG } from '@/components/svg/RatingstarSVG';

const StoreInfo = () => {
  return (
    <div className='grid grid-cols-2 divide-x divide-gray-100'>
      <div className='flex flex-col items-center justify-center gap-2 p-[10px]'>
        <div className='text-center text-gray-600 subTitle-18'>가게 이름</div>
        <div className='text-gray-700 body-16'>파스타 참 맛있는 집</div>
      </div>
      <div className='flex flex-col items-center justify-center gap-2 p-[10px]'>
        <div className='text-center text-gray-600 subTitle-18'>별점</div>
        <div className='flex items-center gap-1 text-primary-400 subTitle-20'>
          <span>
            <RatingstarFillSVG />
          </span>
          <span>4.5</span>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
