const CHOSUNG = {
  ㄱ: '가'.charCodeAt(0),
  ㄲ: '까'.charCodeAt(0),
  ㄴ: '나'.charCodeAt(0),
  ㄷ: '다'.charCodeAt(0),
  ㄸ: '따'.charCodeAt(0),
  ㄹ: '라'.charCodeAt(0),
  ㅁ: '마'.charCodeAt(0),
  ㅂ: '바'.charCodeAt(0),
  ㅃ: '빠'.charCodeAt(0),
  ㅅ: '사'.charCodeAt(0),
  ㅆ: '싸'.charCodeAt(0),
  ㅇ: '아'.charCodeAt(0),
  ㅈ: '자'.charCodeAt(0),
  ㅉ: '짜'.charCodeAt(0),
  ㅊ: '차'.charCodeAt(0),
  ㅋ: '카'.charCodeAt(0),
  ㅌ: '타'.charCodeAt(0),
  ㅍ: '파'.charCodeAt(0),
  ㅎ: '하'.charCodeAt(0),
} as const;

const JONGSUNG_TO_CHOSUNG = [
  'ㄱ',
  'ㄲ',
  'ㅅ',
  'ㄴ',
  'ㅈ',
  'ㅎ',
  'ㄷ',
  'ㄹ',
  'ㄱ',
  'ㅁ',
  'ㅂ',
  'ㅅ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
  'ㅁ',
  'ㅂ',
  'ㅅ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
] as const;

type ChosungType = keyof typeof CHOSUNG;

const KR_START = '가'.charCodeAt(0);
const KR_SYLLABLE_COUNT = 588;
const KR_JONGSUNG_COUNT = 28;

export const isKorean = (char: string) => {
  return /[ㄱ-ㅎ]/.test(char) || /[가-힣]/.test(char);
};

const isChosung = (char: string): char is ChosungType => {
  return char in CHOSUNG;
};

const hasJongsung = (char: string) => {
  return !((char.charCodeAt(0) - KR_START) % KR_JONGSUNG_COUNT === 0);
};

const createHangulRegexOnlyChosung = (chosung: ChosungType) => {
  return new RegExp(
    `[${String.fromCharCode(CHOSUNG[chosung])}-${String.fromCharCode(CHOSUNG[chosung] + KR_SYLLABLE_COUNT - 1)}]`,
  );
};

const createHangulRegexWithoutJongsung = (char: string) => {
  return new RegExp(
    `[${char}-${String.fromCharCode(char.charCodeAt(0) + KR_JONGSUNG_COUNT - 1)}]`,
  );
};

export const createHangulRegex = (char: string) => {
  if (isChosung(char)) {
    return createHangulRegexOnlyChosung(char);
  }

  if (!hasJongsung(char)) {
    return createHangulRegexWithoutJongsung(char);
  }

  const jongsungIndex = (char.charCodeAt(0) - KR_START) % KR_JONGSUNG_COUNT;
  const withoutJongsung = String.fromCharCode(
    char.charCodeAt(0) - jongsungIndex,
  );

  const regOnlyChosung = createHangulRegexOnlyChosung(
    JONGSUNG_TO_CHOSUNG[jongsungIndex - 1],
  );

  return new RegExp(`(${char}|${withoutJongsung}${regOnlyChosung.source})`);
};
