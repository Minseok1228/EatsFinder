import { ComponentProps, ReactNode, forwardRef } from 'react';

interface AuthInputProps extends ComponentProps<'input'> {
  label?: string;
  message?: string;
  errormessage?: string;
  icon?: ReactNode;
  button?: ReactNode;
  timer?: string;
  underStoke?: boolean;
}
export const TextField = forwardRef<HTMLInputElement, AuthInputProps>(
  function TextField(
    { label, message, errormessage, icon, button, timer, underStoke, ...props },
    ref,
  ) {
    return (
      <div className='flex w-[370px] flex-col'>
        <label
          className={`text-gray-400 subTitle-16 ${errormessage && `text-primary-500`}`}
        >
          {label}
        </label>
        <div className='relative flex'>
          <input
            {...props}
            ref={ref}
            className={`w-[370px] p-[10px] text-gray-900 caret-primary-400 body-16 focus:outline-none ${
              underStoke
                ? 'border-b border-b-gray-100 focus:border-b-primary-400'
                : 'rounded border border-gray-100 focus:border-primary-400'
            } ${errormessage && `border-error`} ${icon && `pr-6`} ${button && `pr-[98px]`} disabled:bg-gray-50`}
          />
          {(icon || button) && (
            <div className='absolute right-1 top-1/2 flex -translate-y-1/2'>
              {icon || button}
            </div>
          )}
        </div>

        {(message || errormessage) && (
          <div className='flex justify-between'>
            <p
              className={`body-12 ${errormessage ? 'text-error' : 'text-gray-400'}`}
            >
              {errormessage ? errormessage : message}
            </p>
            {timer && <p className={`text-error body-12`}>{timer}</p>}
          </div>
        )}
      </div>
    );
  },
);
