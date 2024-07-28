import { customTwMerge } from '@/utils/customTwMerge';

interface ChipsProps {
  emoji?: string;
  text: string;
  selected?: boolean;
}

export const Chip = ({ emoji, text, selected = false }: ChipsProps) => {
  return (
    <span
      className={customTwMerge(
        'w-max rounded-[22px] border border-gray-100 px-[20px] py-[10px] text-gray-600 body-16',
        selected && 'border-gray-900 text-gray-900 subTitle-16',
      )}
    >
      <span className='mr-1 font-tossface'>{emoji}</span>
      {text}
    </span>
  );
};
