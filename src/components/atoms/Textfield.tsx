import { ComponentProps, ReactElement, ReactNode } from 'react';

interface AuthInputProps extends ComponentProps<'input'> {
  label: ReactNode;
  message?: string;
  error?: string;
  errormessage?: string;
  icon?: ReactNode;
}
export const Textfield = ({
  label,
  message,
  error,
  errormessage,
  icon,
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
          //border? outline? 아이콘은 어떻게 할까...
          className={`w-[370px] rounded border border-gray-100 p-[10px] caret-primary-400 body-16 ${error && `border-error`} focus:border-primary-400 ${icon && `pr-6`} disabled:bg-gray-50`}
        />
        {icon && (
          <div className='absolute right-1 top-1/2 flex -translate-y-1/2'>
            {icon}
          </div>
        )}
      </div>
      {message && (
        <span className={`text-gray-400 body-12 ${error && `text-error`}`}>
          {error ? error : message}
        </span>
      )}
    </div>
  );
};
