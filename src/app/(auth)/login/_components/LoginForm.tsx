'use client';
import { Button } from '@/components/atoms';
import { TextField } from '@/components/atoms/textField/TextField';
import { Spacer } from '@/components/atoms/spacer/Spacer';
import Link from 'next/link';
import React from 'react';
import { SaveLoginState } from './SaveLoginState';
import { useLogin } from '../../_hooks/useFormData';
import { VisibilityButtonIcon } from './VisibilityButtonIcon';
export const LoginForm = () => {
  const { register, handleSubmit } = useLogin();
  const { visibility, ButtonIcon } = VisibilityButtonIcon();
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-col gap-3'>
        <TextField placeholder='이메일을 입력하세요.' {...register('email')} />
        <TextField
          type={visibility}
          placeholder='비밀번호를 입력하세요.'
          {...register('password')}
          icon={<ButtonIcon />}
        />
        <div className='flex justify-between text-gray-300 body-14'>
          <p>
            <SaveLoginState />
          </p>
          <Link href='/find-account'>비밀번호 찾기</Link>
        </div>
      </div>
      <Spacer y={32} />
      <Button type='submit' size={'large'}>
        로그인 하기
      </Button>
    </form>
  );
};
