export type LoginFormType = {
  email: string;
  password: string;
};
export type SignupFormType = {
  name: string;
  phoneNumber: string;
  email: string;
  code: string;
  password: string;
  passwordCheck: string;
  nickname: string;
};
export type SignupType = Omit<SignupFormType, 'passwordCheck' | 'code'>;
export type EmailConfirmType = {
  email: string;
  code: string;
};
