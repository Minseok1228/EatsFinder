export interface PostContentType {
  id: number;
  content: string;
  thumbnailUrl: string;
  imageUrl: string | null;
  menuTag: string[];
  keywordTag: string;
  likeCount: number;
  createdAt: string;
  users: {
    id: number;
    nickname: string;
    profileImage: string | null;
  };
  places: PlacesType;
  starRatings: number;
}

export interface PlacesType {
  id: number;
  name: string;
  address: string;
  roadAddress: string;
  telephone: string;
  x: number;
  y: number;
  category: string;
  categoryName: string;
  categoryCode: string;
}
