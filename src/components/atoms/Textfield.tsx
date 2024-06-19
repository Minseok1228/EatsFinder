import { ComponentProps, ReactElement, ReactNode } from 'react';

interface AuthInputProps extends ComponentProps<'input'> {
  label: string;
  message?: string;
  error?: string;
  errormessage?: string;
  icon?: ReactNode;
  button?: ReactNode;
  timer?: string;
}
export const Textfield = ({
  label,
  message,
  error,
  errormessage,
  icon,
  button,
  timer,
  ...props
}: AuthInputProps) => {
  //input focus되면 안에 버튼이 보이게?

  return (
    <div className='flex w-[370px] flex-col'>
      <label
        className={`text-gray-400 subTitle-16 ${error && `text-primary-500`}`}
      >
        {label}
      </label>
      <div className='relative flex'>
        <input
          {...props}
          className={`w-[370px] rounded border border-gray-100 p-[10px] text-gray-900 caret-primary-400 body-16 ${error && `border-error`} focus:border-primary-400 ${icon && `pr-6`} disabled:bg-gray-50 ${button && `pr-[98px]`}`}
        />
        {(icon || button) && (
          <div className='absolute right-1 top-1/2 flex -translate-y-1/2'>
            {icon || button}
          </div>
        )}
      </div>

      {message && (
        <div className='flex justify-between'>
          <p className={`body-12 ${error ? 'text-error' : 'text-gray-400'}`}>
            {error ? error : message}
          </p>
          {timer && <p className={`text-error body-12`}>{timer}</p>}
        </div>
      )}
    </div>
  );
};
