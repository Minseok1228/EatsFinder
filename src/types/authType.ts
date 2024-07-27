export type LoginFormType = {
  email: string;
  password: string;
};
export type SignupFormType = {
  name: string;
  phoneNumber: string;
  email: string;
  code: string;
  codeValidation: boolean;
  password: string;
  passwordCheck: string;
  nickname: string;
  nicknameDuplicated: boolean;
  acceptTerms: boolean;
  acceptPrivacyPolicy: boolean;
};
export type SignupType = Omit<
  SignupFormType,
  | 'passwordCheck'
  | 'code'
  | 'acceptTerms'
  | 'acceptPrivacyPolicy'
  | 'codeValidation'
  | 'nicknameDuplicated'
>;
export type EmailConfirmType = {
  email: string;
  code: string;
};
