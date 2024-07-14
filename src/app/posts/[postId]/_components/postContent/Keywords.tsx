import { Chip } from '@/components/atoms';
import { KEYWORDS } from '@/constants/keywords';

const example: Array<keyof typeof KEYWORDS> = [1, 2, 3, 5, 6, 11, 14, 15];

const Keywords = () => {
  return (
    <div className='flex flex-wrap gap-2'>
      {example.map((it) => (
        <Chip key={it} text={KEYWORDS[it].text} emoji={KEYWORDS[it].emoji} />
      ))}
    </div>
  );
};

export default Keywords;
