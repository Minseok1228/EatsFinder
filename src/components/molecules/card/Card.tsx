import { Checkbox } from '@/components/atoms';
import { OfficialLogoSVG } from '@/components/svg/OfficialLogoSVG';
import { RatingstarFillSVG } from '@/components/svg/RatingstarSVG';

export const Card = () => {
  return (
    <div className='w-[250px]'>
      <div className='relative mb-2 h-[250px] overflow-hidden rounded-[24px] bg-gray-100'>
        <Checkbox className='absolute left-5 top-5' />
        <Checkbox variant='bookmark' className='absolute right-5 top-5' />
      </div>
      <div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center text-gray-800 subTitle-20'>
            <span className='mr-1'>서울부띠끄</span>
            <span>{OfficialLogoSVG()}</span>
          </div>
          <span className='text-gray-500 body-14'>양식</span>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-gray-500 body-14'>
            서울 중구 만리재로 209-1
          </span>
          <span className='flex text-primary-400 subTitle-20'>
            {RatingstarFillSVG()} 4.5
          </span>
        </div>
      </div>
    </div>
  );
};
