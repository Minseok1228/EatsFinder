'use client';

import { TextField } from '@/components/atoms/TextField';
import { TextFieldWithBtn } from '@/components/molecules/TexTFieldWithBtn';
import { SocialGoogleSVG } from '@/components/svg/SocialSVG';

export default function Test() {
  return (
    <div className='flex w-screen flex-col items-center'>
      <TextFieldWithBtn
        label='라벨'
        buttonMessage='버튼'
        placeholder='안녕'
        message='입력하세요'
        error='에러'
        timer='타이머'
        underStoke={true}
      />
      <TextField
        underStoke={true}
        label='안녕'
        message='ddd'
        error='dd'
        timer='dd'
      />
    </div>
  );
}
