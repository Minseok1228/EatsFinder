'use client';
import { Button } from '@/components/atoms';
import { TextField } from '@/components/atoms/textField/TextField';
import { Spacer } from '@/components/atoms/spacer/Spacer';
import { CheckBoxDefaultSVG } from '@/components/svg/CheckBoxSVG';
import { VisibilitySVG } from '@/components/svg/VisibilitySVG';
import Link from 'next/link';
import React from 'react';
import { SaveLoginState } from './SaveLoginState';
import { useToggleHandler } from '../../_hooks/useToggleHandler';
import { InvisigilitySVG } from '@/components/svg/InvisigilitySVG';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormType } from '@/app/types/authType';

export const LoginForm = () => {
  const { value, handleValue } = useToggleHandler();
  const onSubmit: SubmitHandler<LoginFormType> = (data) => console.log(data);
  const { register, handleSubmit } = useForm<LoginFormType>();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit);
      }}
    >
      <div className='flex flex-col gap-3'>
        <input {...register('email')} />
        <TextField placeholder='이메일을 입력하세요.' />
        <TextField
          {...register('password')}
          type={value ? 'text' : 'password'}
          placeholder='비밀번호를 입력하세요.'
          icon={
            <button onClick={handleValue}>
              {value ? <VisibilitySVG /> : <InvisigilitySVG />}
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
      <Button type='submit' size={'large'}>
        로그인 하기
      </Button>
    </form>
  );
};
