'use server';
import { UserData } from '@/types/authType';
import { cookies } from 'next/headers';

export const getUserInfo = async () => {
  const data = cookies().get('userInfo');
  if (!data) {
    return;
  }
  const userInfo: UserData = await JSON.parse(data.value);
  return userInfo;
};
