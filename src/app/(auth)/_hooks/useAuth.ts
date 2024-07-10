import { LoginFormType } from '@/types/authType';
import { SignupType } from '@/types/authType';

export const login = async (data: LoginFormType) => {
  const { email, password } = data;
  const res = await fetch(`${process.env.NEXT_PUBLIC_NODE_SERVER}/auth/login`, {
    method: 'POST',
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return res.json();
};

export const signup = async (data: SignupType) => {
  const { email, name, nickname, password, phoneNumber } = data;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NODE_SERVER}/auth/signup`,
    {
      method: 'POST',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phoneNumber,
        email,
        password,
        nickname,
        profileImage: null,
      }),
    },
  );
  return res.json();
};
