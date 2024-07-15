import { KEYWORDS } from '@/constants/keywords';

type Keywords = keyof typeof KEYWORDS;

const parseKeywords = (keywords: string): Keywords[] => {
  const parsedKeywords = keywords
    .split(',')
    .map((it) => parseInt(it))
    .filter((it): it is Keywords => it in KEYWORDS);
  return parsedKeywords;
};

export default parseKeywords;
