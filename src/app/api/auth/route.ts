import { NODE_SERVER } from '@/constants/baseUrl';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export async function POST() {
  const res = await fetch(`${NODE_SERVER}/auth/signup`, {
    method: 'POST',
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
export const GET = async (req: NextRequest, res: NextResponse) => {
  const searchParams = req.nextUrl.searchParams;
  const code = searchParams.get('code');
  const provider = searchParams.get('provider');
  const state = searchParams.get('state');

  const response = await fetch(
    `${NODE_SERVER}/auth/callback/${provider}?code=${code}&state=${state}`,
    {
      method: 'GET',
      headers: {
        accept: '*/*',
      },
    },
  );

  const data = await response.json();

  if (data.statusCode) {
    return redirect('/login?error=');
    //쿼리 딸려오면 로그인창에서 유저에게 로그인이 필요하다고 보여주기
  }
  const cookiesStore = cookies();
  console.log(data);
  // cookiesStore.get('loginasdlf');
  // 로그인 저장 유무를 쿠키에 저장함
  // 해당 값에 따라 조건문을 통해서 epxires => 넣는거죠

  const expireTime = 2592000000;
  cookiesStore.set('jwt', `${data.accessToken}`);
  cookiesStore.set('test', `data`);
  const cookie = cookiesStore.get('jwt');
  const all = cookiesStore.getAll();
  console.log('all', all);
  console.log('cookie', cookie);
  // 쿠키에 jwt 토큰이 있나 없나로 로그인 유무를 확인
  //토큰처리
  // return req;
  return redirect('/');
};
