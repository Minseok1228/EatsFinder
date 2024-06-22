'use client';
import { Button } from '@/components/atoms';
import { TextField } from '@/components/atoms/TextField';
import { Spacer } from '@/components/atoms/button/Spacer';
import { CheckBoxDefaultSVG } from '@/components/svg/CheckBoxSVG';
import { VisibilitySVG } from '@/components/svg/VisibilitySVG';
import Link from 'next/link';
import React from 'react';
import { saveLoginState } from '../../_hooks/saveLoginState';
import { SaveLoginState } from './SaveLoginState';

export const LoginForm = () => {
  const { loginSave, setLoginSave } = saveLoginState();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className='flex flex-col gap-3'>
        <TextField placeholder='이메일을 입력하세요.' />
        <TextField
          type='password'
          placeholder='비밀번호를 입력하세요.'
          icon={
            <button>
              <VisibilitySVG />
            </button>
          }
        />
        {/*p태그 css 다시해야함  */}
        <div className='flex justify-between text-gray-300'>
          <p>
            <SaveLoginState />
          </p>
          <Link href='/find-account'>아이디 / 비밀번호 찾기</Link>
        </div>
      </div>
      <Spacer y={32} />
      <Button size={'large'}>로그인 하기</Button>
    </form>
  );
};
