import { Button } from '@/components/atoms';
import { TextField } from '@/components/atoms/textField';
import { forwardRef } from 'react';
interface TextFieldWithBtnProps {
  label: string;
  message?: string;
  error?: string;
  errormessage?: string;
  buttonMessage: string;
  timer?: string;
  placeholder?: string;
  underStoke?: boolean;
  buttonDisabled?: boolean;
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const TextFieldWithBtn = forwardRef<
  HTMLInputElement,
  TextFieldWithBtnProps
>(function TextTieldWithBtn(
  {
    label,
    message,
    buttonMessage,
    error,
    timer,
    placeholder,
    underStoke,
    buttonDisabled,
    onButtonClick,
    ...props
  },
  ref,
) {
  return (
    <>
      <TextField
        {...props}
        ref={ref}
        label={label}
        placeholder={placeholder}
        message={message}
        timer={timer}
        error={error}
        underStoke={underStoke}
        button={
          <Button
            onClick={onButtonClick}
            type='button'
            variant={'primary'}
            size={'mini'}
            disabled={buttonDisabled}
          >
            {buttonMessage}
          </Button>
        }
      />
    </>
  );
});
