import { ReactNode } from 'react';
import { Button } from '../atoms';
import { TextField } from '../atoms/TextField';
interface TextFieldWithBtnProps {
  label: string;
  message?: string;
  error?: string;
  errormessage?: string;
  buttonMessage: string;
  timer?: string;
  placeholder: string;
  underStoke?: boolean;
}
export const TextFieldWithBtn = ({
  label,
  message,
  buttonMessage,
  error,
  errormessage,
  timer,
  placeholder,
  underStoke,
}: TextFieldWithBtnProps) => {
  return (
    <>
      <TextField
        label={label}
        placeholder={placeholder}
        message={message}
        timer={timer}
        error={error}
        underStoke={underStoke}
        button={
          <Button variant={'primary'} size={'mini'}>
            {buttonMessage}
          </Button>
        }
      />
    </>
  );
};
