'use client';
import { Button } from '@/components/atoms';
import { TextField } from '@/components/atoms/TextField';
import { Spacer } from '@/components/atoms/button/Spacer';
import { CheckBoxDefaultSVG } from '@/components/svg/CheckBoxSVG';
import { VisibilitySVG } from '@/components/svg/VisibilitySVG';
import React from 'react';

export const LoginForm = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className='flex flex-col gap-3'>
        <TextField placeholder='이메일을 입력하세요.' />
        <TextField
          placeholder='비밀번호를 입력하세요.'
          icon={
            <button>
              <VisibilitySVG />
            </button>
          }
        />
        {/*p태그 css 다시해야함  */}
        <div className='flex justify-between text-gray-300'>
          <p className='flex items-center gap-1'>
            <button>
              <CheckBoxDefaultSVG />
            </button>
            <span>로그인상태 저장</span>
          </p>
          <p>아이디 / 비밀번호 찾기</p>
        </div>
      </div>
      <Spacer y={32} />
      <Button size={'large'}>로그인 하기</Button>
    </form>
  );
};
