// useTimer.ts
import { useState, useEffect } from 'react';

export const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId!: NodeJS.Timeout;
    if (isActive && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
    setTime(initialTime);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(initialTime);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return { time, isActive, startTimer, resetTimer, formatTime };
};
