export type LoginFormType = {
  email: string;
  password: string;
};
export type SignupFormType = {
  name: string;
  phoneNumber: string;
  email: string;
  code: string;
  codeValidation: string;
  password: string;
  passwordCheck: string;
  nickname: string;
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
>;
export type EmailConfirmType = {
  email: string;
  code: string;
};
