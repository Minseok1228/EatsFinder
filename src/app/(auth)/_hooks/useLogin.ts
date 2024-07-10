import { LoginFormType } from '@/types/authType';

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
