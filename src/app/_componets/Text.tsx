'use client';
import { Textfield } from '@/components/atoms/Textfield';
import { Textfield_btn } from '@/components/molecules/Textfield_btn';
export default function Test() {
  return (
    <div className='flex w-screen flex-col items-center'>
      <Textfield_btn
        label='라벨'
        buttonMessage='버튼'
        placeholder='안녕'
        message='입력하세요'
        error='에러'
        timer='타이머'
      />
      <Textfield underStoke={true} label='안녕' message='ddd' timer='dd' />
    </div>
  );
}
