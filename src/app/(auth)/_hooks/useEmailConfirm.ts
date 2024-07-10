import { useState } from 'react';
import { useTimer } from './useTimer';
import { EmailConfirmType } from '@/types/authType';

export const useEmailConfirm = () => {
  const [authButtonState, setAuthButtonState] = useState(true);
  const { time, startTimer, formatTime } = useTimer(300);
  const sendEmail = (email: string) => async () => {
    const aaa = await sendCode(email);
    setAuthButtonState(false);
    startTimer();
    return console.log(aaa);
  };
  const confirmEmail = (data: EmailConfirmType) => async () => {
    const bbb = await confirmCode(data);
    return console.log(bbb);
  };

  return { sendEmail, authButtonState, formatTime, time, confirmEmail };
};
const sendCode = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_KOTLIN_SERVER}/auth/email`,
    {
      method: 'POST',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        email,
      }),
    },
  );
  return res.json();
};
const confirmCode = async (data: EmailConfirmType) => {
  const { code, email } = data;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_KOTLIN_SERVER}/auth/email/verify-code?email=${email}&code=${code}`,
    {
      method: 'GET',
      headers: { accept: '*/*' },
    },
  );
  return res.json();
};
