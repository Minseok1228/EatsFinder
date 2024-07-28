import { NODE_SERVER } from '@/constants/baseUrl';
import { CookieOptions } from '@/types/authType';
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
    return redirect('/login?error=fail');
  }
  const cookiesStore = cookies();
  const loginSaveState = cookiesStore.get('isLoginSave');
  const options: CookieOptions = {
    path: '/',
    httpOnly: true,
  };
  if (loginSaveState) {
    options['maxAge'] = 2592000;
  }

  cookiesStore.set('jwt', `${data.accessToken}`, options);
  const cookie = cookiesStore.get('jwt');
  if (cookie) {
    return redirect('/');
    return res;
  }

  return redirect('/login');
};
