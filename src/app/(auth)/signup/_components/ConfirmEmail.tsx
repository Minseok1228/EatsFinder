import { TextFieldWithBtn } from '@/components/molecules/texTFieldWithBtn';
import React, { forwardRef } from 'react';

export const ConfirmEmail = forwardRef<HTMLInputElement>(
  function ConfirmEmail(props, ref) {
    return (
      <div className='flex flex-col gap-9'>
        <TextFieldWithBtn
          ref={ref}
          {...props}
          label='이메일'
          buttonMessage='발송하기'
          placeholder='abcd@gamil.com'
        />
        <TextFieldWithBtn
          label='인증번호'
          buttonMessage='인증하기'
          placeholder='인증번호를 입력해주세요.'
          message='이메일로 발송된 인증번호를 입력하세요.'
          timer='05:00'
          buttonDisabled={true}
        />
      </div>
    );
  },
);
