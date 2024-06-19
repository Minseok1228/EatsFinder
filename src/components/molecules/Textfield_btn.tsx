import { ReactNode } from 'react';
import { Button } from '../atoms';
import { Textfield } from '../atoms/Textfield';
interface Textfield_btnProps {
  label: string;
  message?: string;
  error?: string;
  errormessage?: string;
  buttonMessage: string;
  timer?: string;
  placeholder: string;
  underStoke?: boolean;
}
export const Textfield_btn = ({
  label,
  message,
  buttonMessage,
  error,
  errormessage,
  timer,
  placeholder,
  underStoke,
}: Textfield_btnProps) => {
  return (
    <>
      <Textfield
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
