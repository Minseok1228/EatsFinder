import { TextFieldWithBtn } from '@/components/molecules/texTFieldWithBtn';
import React, { forwardRef } from 'react';
import { SignupFormType } from '@/types/authType';
import { UseFormWatch } from 'react-hook-form';
import { useEmailConfirm } from '../../_hooks/useEmailConfirm';
import { useTimer } from '../../_hooks/useTimer';
type ConfrimEmailProps = {
  watch: UseFormWatch<SignupFormType>;
};
export const ConfirmEmail = forwardRef<HTMLInputElement, ConfrimEmailProps>(
  function ConfirmEmail(props, ref) {
    const { sendEmail, authButtonState, formatTime, time } = useEmailConfirm();
    return (
      <div className='flex flex-col gap-9'>
        <TextFieldWithBtn
          ref={ref}
          {...props}
          label='이메일'
          buttonMessage='발송하기'
          placeholder='abcd@gamil.com'
          onButtonClick={sendEmail(props.watch('email'))}
        />
        <TextFieldWithBtn
          label='인증번호'
          buttonMessage='인증하기'
          placeholder='인증번호를 입력해주세요.'
          message='이메일로 발송된 인증번호를 입력하세요.'
          timer={formatTime(time)}
          buttonDisabled={authButtonState}
        />
      </div>
    );
  },
);
