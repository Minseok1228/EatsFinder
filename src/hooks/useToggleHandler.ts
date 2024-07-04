'use client';
import { useState } from 'react';

export const useToggleHandler = () => {
  const [value, setValue] = useState<boolean>(false);
  const handleValue = () => {
    setValue((prev) => !prev);
  };
  return { value, handleValue };
};
