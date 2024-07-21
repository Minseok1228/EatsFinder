'use client';
import { useState } from 'react';

export const useTabController = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return {
    activeIndex,
    handleTabClick,
  };
};
