import { NEST_SERVER } from '@/constants/baseUrl';
import { PostContentType, PlacesType } from '@/types/postType';

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

export const createPlace = async (place: PlacesType) => {
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
  const res = await fetch(`${NEST_SERVER}/places/${placeName}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  return data;
};
