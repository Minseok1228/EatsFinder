import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export const POST = async () => {
  const response = NextResponse.json({ message: '로그아웃 완료되었습니다.' });
  cookies().delete('jwt');
  cookies().delete('userInfo');
  return response;
};
