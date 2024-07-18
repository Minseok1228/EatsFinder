import { TextFieldWithBtn } from '@/components/molecules/texTFieldWithBtn';
import React, { forwardRef } from 'react';
import { SignupFormType } from '@/types/authType';
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import { useEmailConfirm } from '../../_hooks/useEmailConfirm';
import { Checkbox } from '@/components/atoms';
type ConfrimEmailProps = {
  register: UseFormRegister<SignupFormType>;
  watch: UseFormWatch<SignupFormType>;
  errormessage?: FieldErrors<SignupFormType>;
  setValue: UseFormSetValue<SignupFormType>;
};
export const ConfirmEmail = forwardRef<HTMLInputElement, ConfrimEmailProps>(
  function ConfirmEmail({ register, watch, errormessage, setValue }, ref) {
    const { sendEmail, authButtonState, formatTime, time, confirmEmail } =
      useEmailConfirm(setValue);
    return (
      <div className='flex flex-col gap-9'>
        <TextFieldWithBtn
          {...register('email')}
          label='이메일'
          buttonMessage='발송하기'
          placeholder='abcd@gamil.com'
          onButtonClick={sendEmail(watch('email'))}
          errormessage={errormessage?.email?.message}
        />
        {/**에러를 보여줄려면 field가 필요해서 만들어둔 안보이는 인풋 */}
        <input
          type='checkbox'
          className='hidden'
          {...register('codeValidation')}
        />
        <TextFieldWithBtn
          label='인증번호'
          {...register('code')}
          buttonMessage='인증하기'
          placeholder='인증번호를 입력해주세요.'
          message='이메일로 발송된 인증번호를 입력하세요.'
          timer={formatTime(time)}
          buttonDisabled={!authButtonState}
          onButtonClick={confirmEmail({
            email: watch('email'),
            code: watch('code'),
          })}
          errormessage={errormessage?.codeValidation?.message}
        />
      </div>
    );
  },
);
