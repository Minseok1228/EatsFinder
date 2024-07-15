import { Chip } from '@/components/atoms';
import parseKeywords from '@/utils/parseKeywords';
import { KEYWORDS } from '@/constants/keywords';

interface KeywordsProps {
  keywords: string;
}

const Keywords = ({ keywords }: KeywordsProps) => {
  const parsedKeywords = parseKeywords(keywords);
  return (
    <div className='flex flex-wrap gap-2'>
      {parsedKeywords.map((it) => (
        <Chip key={it} text={KEYWORDS[it].text} emoji={KEYWORDS[it].emoji} />
      ))}
    </div>
  );
};

export default Keywords;
