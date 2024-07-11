import { InputHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { customTwMerge } from '@/utils/customTwMerge';
import { SearchSVG } from '@/components/svg/SearchSVG';
import { UploadSVG } from '@/components/svg/UploadSVG';

const searchVariant = cva(
  'flex items-center rounded-[30px] h-[60px] gap-2 p-5 border border-gray-100 body-18 focus-within:border-primary-400 focus-within:border-2',
  {
    variants: {
      variant: {
        large: 'w-[770px]',
        small: 'w-[400px]',
      },
    },
  },
);

interface SearchProps
  extends VariantProps<typeof searchVariant>,
    InputHTMLAttributes<HTMLInputElement> {
  onSearch?: () => {};
}

export const Search = ({
  variant,
  className,
  onSearch,
  ...props
}: SearchProps) => {
  return (
    <div className={customTwMerge(searchVariant({ variant }), className)}>
      <div>
        <SearchSVG />
      </div>
      <input className='w-full outline-none' {...props} />
      <button aria-label='search button' onClick={onSearch}>
        <UploadSVG />
      </button>
    </div>
  );
};
