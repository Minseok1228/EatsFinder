const CATEGORIES = {
  FOOD_PRICE: '음식/가격',
  ATMOSPHERE_SPACE: '분위기/공간',
  BEVERAGE_DESSERT: '음료/디저트',
  SERVICE_MISC: '서비스/기타',
} as const;

type Category = (typeof CATEGORIES)[keyof typeof CATEGORIES];

interface Keyword {
  category: Category;
  emoji: string;
  text: string;
}

class KeywordManager {
  private _keywords: Keyword[];

  constructor() {
    this._keywords = [];
  }

  addKeyword(category: Category, emoji: string, text: string) {
    this._keywords.push({ category, emoji, text });
  }

  get keywords() {
    return this._keywords;
  }
}

const keywordManager = new KeywordManager();

// 음식/가격
keywordManager.addKeyword(CATEGORIES.FOOD_PRICE, '😋', '맛있어요');
keywordManager.addKeyword(CATEGORIES.FOOD_PRICE, '🍚', '양이 많아요');
keywordManager.addKeyword(CATEGORIES.FOOD_PRICE, '⏰', '빨리 나와요');
keywordManager.addKeyword(CATEGORIES.FOOD_PRICE, '💸', '가성비 굿');
keywordManager.addKeyword(CATEGORIES.FOOD_PRICE, '🧂', '간이 세요');
keywordManager.addKeyword(CATEGORIES.FOOD_PRICE, '🫥', '싱거워요');

// 분위기/공간
keywordManager.addKeyword(CATEGORIES.ATMOSPHERE_SPACE, '🌉', '근사해요');
keywordManager.addKeyword(CATEGORIES.ATMOSPHERE_SPACE, '📸', '사진이 잘나와요');
keywordManager.addKeyword(CATEGORIES.ATMOSPHERE_SPACE, '🏞', '공간이 넓어요');
keywordManager.addKeyword(CATEGORIES.ATMOSPHERE_SPACE, '🧘‍♀️', '아늑해요');
keywordManager.addKeyword(CATEGORIES.ATMOSPHERE_SPACE, '💬', '대화하기 좋아요');
keywordManager.addKeyword(CATEGORIES.ATMOSPHERE_SPACE, '🛋', '좌석이 편해요');
keywordManager.addKeyword(CATEGORIES.ATMOSPHERE_SPACE, '🍛', '혼밥하기 좋아요');
keywordManager.addKeyword(CATEGORIES.ATMOSPHERE_SPACE, '🏝', '이국적이에요');
keywordManager.addKeyword(CATEGORIES.ATMOSPHERE_SPACE, '😎', '트렌디해요');
keywordManager.addKeyword(CATEGORIES.ATMOSPHERE_SPACE, '🤫', '조용해요');
keywordManager.addKeyword(CATEGORIES.ATMOSPHERE_SPACE, '⭐️', '프라이빗해요');
keywordManager.addKeyword(CATEGORIES.ATMOSPHERE_SPACE, '🙋‍♀️', '아이들이 많아요');
keywordManager.addKeyword(
  CATEGORIES.ATMOSPHERE_SPACE,
  '👩‍❤️‍👨',
  '소개팅할 땐 여기',
);

// 음료/디저트
keywordManager.addKeyword(CATEGORIES.BEVERAGE_DESSERT, '🍰', '달달해요');
keywordManager.addKeyword(CATEGORIES.BEVERAGE_DESSERT, '🫖', '향이 좋아요');
keywordManager.addKeyword(
  CATEGORIES.BEVERAGE_DESSERT,
  '🫓',
  '달지 않아서 좋아요',
);
keywordManager.addKeyword(CATEGORIES.BEVERAGE_DESSERT, '☕️', '고소한 커피에요');
keywordManager.addKeyword(CATEGORIES.BEVERAGE_DESSERT, '🥴', '산미가 있어요');
keywordManager.addKeyword(CATEGORIES.BEVERAGE_DESSERT, '🧀', '꾸덕해요');
keywordManager.addKeyword(CATEGORIES.BEVERAGE_DESSERT, '🍵', '차와 잘어울려요');

// 서비스/기타
keywordManager.addKeyword(CATEGORIES.SERVICE_MISC, '😊', '친절해요');
keywordManager.addKeyword(CATEGORIES.SERVICE_MISC, '🚙', '주차가 편해요');
keywordManager.addKeyword(CATEGORIES.SERVICE_MISC, '🚻', '화장실이 깨끗해요');
keywordManager.addKeyword(CATEGORIES.SERVICE_MISC, '📶', '와이파이가 있어요');
keywordManager.addKeyword(CATEGORIES.SERVICE_MISC, '🐶', '애견동반 가능');
keywordManager.addKeyword(CATEGORIES.SERVICE_MISC, '🥩', '고기를 구워줘요');
keywordManager.addKeyword(CATEGORIES.SERVICE_MISC, '🥗', '셀프바가 있어요');

export const keywords = keywordManager.keywords;
