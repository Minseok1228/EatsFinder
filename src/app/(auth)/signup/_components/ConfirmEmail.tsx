import { TextFieldWithBtn } from '@/components/molecules/texTFieldWithBtn';
import React, { forwardRef } from 'react';
import { SignupFormType } from '@/types/authType';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import { useEmailConfirm } from '../../_hooks/useEmailConfirm';
type ConfrimEmailProps = {
  register: UseFormRegister<SignupFormType>;
  watch: UseFormWatch<SignupFormType>;
  errormessage?: string;
};
export const ConfirmEmail = forwardRef<HTMLInputElement, ConfrimEmailProps>(
  function ConfirmEmail({ register, watch, errormessage }) {
    const { sendEmail, authButtonState, formatTime, time, confirmEmail } =
      useEmailConfirm();
    console.log(errormessage);
    return (
      <div className='flex flex-col gap-9'>
        <TextFieldWithBtn
          {...register('email')}
          label='이메일'
          buttonMessage='발송하기'
          placeholder='abcd@gamil.com'
          onButtonClick={sendEmail(watch('email'))}
          errormessage={errormessage}
        />
        <TextFieldWithBtn
          label='인증번호'
          {...register('code')}
          buttonMessage='인증하기'
          placeholder='인증번호를 입력해주세요.'
          message='이메일로 발송된 인증번호를 입력하세요.'
          timer={formatTime(time)}
          buttonDisabled={authButtonState}
          onButtonClick={confirmEmail({
            email: watch('email'),
            code: watch('code'),
          })}
        />
      </div>
    );
  },
);
