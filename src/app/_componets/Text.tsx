'use client';
import { Textfield } from '@/components/atoms/Textfield';
import { CheckSVG } from '@/components/svg/CheckSVG';
import { ErrorSVG } from '@/components/svg/ErrorSVG';
import { VisibilitySVG } from '@/components/svg/VisibilitySVG';
export default function Test() {
  return (
    <div className='flex w-screen flex-col items-center'>
      <Textfield
        label={'Label'}
        placeholder='Placeholder'
        message='TextHelper'
        type='password'
        icon={
          <button onClick={() => console.log('hi')}>
            <VisibilitySVG />
          </button>
        }
      />
      <Textfield
        label={'Label'}
        placeholder='Placeholder'
        message='TextHelper'
      />
      <Textfield
        label={'Label'}
        placeholder='Placeholder'
        message='TextHelper'
      />
      <Textfield
        label={'Label'}
        placeholder='Placeholder'
        message='TextHelper'
        error='Error'
        icon={<ErrorSVG />}
      />
      <Textfield
        label={'Label'}
        placeholder='Placeholder'
        message='TextHelper'
        disabled
      />
      <Textfield
        label={'Label'}
        placeholder='Placeholder'
        icon={<CheckSVG />}
      />
    </div>
  );
}
