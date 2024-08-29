import { Chip } from '@/components/atoms';
import { keywords } from '@/constants/keywords';

interface KeywordIdsProps {
  keywordIds: string;
}

const KeywordChips = ({ keywordIds }: KeywordIdsProps) => {
  const splitedKeywordIds = keywordIds.split(',');
  const filteredKeywords = keywords.filter((keyword) =>
    splitedKeywordIds.includes(keyword.text),
  );

  return (
    <div className='flex flex-wrap gap-2'>
      {filteredKeywords.map((it) => (
        <Chip key={it.text} text={it.text} emoji={it.emoji} />
      ))}
    </div>
  );
};

export default KeywordChips;
