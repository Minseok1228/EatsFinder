import { Checkbox } from '@/components/atoms';
import React from 'react';

export const AgreeTerms = () => {
  return (
    <div className='flex flex-col gap-1'>
      <label className='text-gray-400 subTitle-16'>약관동의</label>
      <Checkbox label='[필수]이용약관에 동의합니다.' />
      <Checkbox label='[필수]개인정보 수집•이용에 동의합니다.' />
    </div>
  );
};
