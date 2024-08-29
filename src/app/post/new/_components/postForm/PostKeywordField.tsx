import { Chip } from '@/components/atoms';
import { filteredKeywords, Category } from '@/constants/keywords';

export const PostKeywordField = ({ category }: { category: Category }) => {
  return (
    <div className='flex flex-col gap-3'>
      <span className='text-gray-400 body-16'>{category}</span>
      {filteredKeywords(category).map((keyword) => (
        <Chip key={keyword.text} emoji={keyword.emoji} text={keyword.text} />
      ))}
    </div>
  );
};
