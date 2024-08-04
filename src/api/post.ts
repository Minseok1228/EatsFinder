import { NEST_SERVER } from '@/constants/baseUrl';
import { PostContentType, PlaceRequestType } from '@/types/postType';

export const getPostContent = async (
  postId: string,
): Promise<PostContentType> => {
  const res = await fetch(`${NEST_SERVER}/posts/${postId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  if (data.statusCode === 404) {
    throw new Error(data.message);
  }

  return data;
};

export const createPlace = async (place: PlaceRequestType) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_NODE_SERVER}/places`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(place),
  });

  const data = await res.json();

  return data;
};

export const getPlace = async (placeName: string) => {
  if (!placeName) return;

  const res = await fetch(`${NEST_SERVER}/places/${placeName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  return data;
};

export const getKakaoPlace = async (placeName: string) => {
  if (!placeName) return;

  const res = await fetch(
    `https://dapi.kakao.com/v2/local/search/keyword?category_group_code=FD6,CE7&size=15&query=${placeName}`,
    {
      method: 'GET',
      headers: {
        Authorization: `KakaoAK 98389c96fbf146dbe00971e671d786a1`,
      },
    },
  );

  const data = await res.json();

  return data;
};
