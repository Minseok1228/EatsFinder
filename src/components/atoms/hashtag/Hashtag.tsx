import { cva, type VariantProps } from 'class-variance-authority';
import { HashtagSVG } from '@/components/svg/HashtagSVG';
import { CloseSVG } from '@/components/svg/CloseSVG';
import { customTwMerge } from '@/utils/customTwMerge';

const hashtageVariant = cva(
  'inline-flex items-center border-2  rounded-[30px] px-5',
  {
    variants: {
      size: {
        large: 'h-[60px] subTitle-20',
        medium: 'h-11 subTitle-16',
      },
    },
    defaultVariants: {
      size: 'large',
    },
  },
);

interface HashtagProps extends VariantProps<typeof hashtageVariant> {
  hashtag: string;
  selected?: boolean;
}

export const Hashtag = ({ size, hashtag, selected = true }: HashtagProps) => {
  return (
    <div
      className={customTwMerge(
        hashtageVariant({ size }),
        selected
          ? 'border-primary-400 fill-primary-400 text-primary-400'
          : 'border-gray-200 fill-gray-200 text-gray-200',
      )}
    >
      <HashtagSVG />
      <span>{hashtag}</span>
      {size === 'medium' && (
        <div className='ml-2 [&>svg]:h-[18px] [&>svg]:w-[18px]'>
          <CloseSVG />
        </div>
      )}
    </div>
  );
};
