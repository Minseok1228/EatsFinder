import { useState } from 'react';
import { useTimer } from './useTimer';

export const useEmailConfirm = () => {
  //이메일전송
  /**
   * 이메일 전송이 이루어지면
   *
   */
  const [authButtonState, setAuthButtonState] = useState(true);
  const { time, startTimer, formatTime } = useTimer(300);
  const sendEmail = (email: string) => () => {
    setAuthButtonState(false);
    startTimer();
    return console.log(email);
  };

  return { sendEmail, authButtonState, formatTime, time };
};
