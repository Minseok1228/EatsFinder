import { NODE_SERVER } from '@/constants/baseUrl';
import { PostContentType } from '@/types/postType';

export const getPostContent = async (
  postId: string,
): Promise<PostContentType> => {
  const res = await fetch(`${NODE_SERVER}/posts/${postId}`, {
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
