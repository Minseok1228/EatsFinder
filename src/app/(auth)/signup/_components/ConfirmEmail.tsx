import { TextFieldWithBtn } from '@/components/molecules/texTFieldWithBtn';
import React, { forwardRef } from 'react';

export const ConfirmEmail = forwardRef<HTMLInputElement>(
  function ConfirmEmail(props, ref) {
    /**
     * 이메일을 받고 이메일 양식이 맞다면 발송버튼이 클릭됨
     * 이메일 인증 input으로 커서가 활성화 되고 타이머가 진행된다.
     * 이메일 인증 input이 채워지면 인증하기 버튼이 활성화 된다.
     */

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
