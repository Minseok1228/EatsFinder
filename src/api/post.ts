import { NEST_SERVER } from '@/constants/baseUrl';
import { PostContentType, PlaceRequestType } from '@/types/postType';

export const createNewPost = async (formData: FormData) => {
  const res = await fetch(`${NEST_SERVER}/posts`, {
    method: 'POST',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3MjI4NjkyOTUsImV4cCI6MTcyMzQ3NDA5NX0.4h75MwgyZaU07yVUY67FOUX63eN7E3ihLgqex0dHep8',
    },
    body: formData,
  });

  const data = await res.json();

  return data;
};

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
  const res = await fetch(`${NEST_SERVER}/places`, {
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
        Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}`,
      },
    },
  );

  const data = await res.json();

  return data;
};

export const getMenus = async (placeId: number) => {
  const res = await fetch(`${NEST_SERVER}/menus/${placeId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  return data;
};

export const createMenu = async (menu: string, placeId: number) => {
  const res = await fetch(`${NEST_SERVER}/menus`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ menu, placeId }),
  });

  const data = await res.json();

  return data;
};
