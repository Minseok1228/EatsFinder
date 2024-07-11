import { z } from 'zod';

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const phoneRegex = /^010\d{8}$/;
const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d|[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
const nicknameRegex =
  /^(?=.*[\p{Hangul}])(?=.*[a-zA-Z])(?=.*\d)[\p{Hangul}a-zA-Z\d]{2,12}$/;
export const loginSchema = z.object({
  email: z
    .string({ required_error: '이메일을 입력해주세요.' })
    .regex(emailRegex, { message: '이메일 양식에 맞게 작성해주세요.' }),
  password: z
    .string({ required_error: '비밀번호를 입력해주세요.' })
    .regex(passwordRegex, {
      message:
        '영문,숫자,특수문자 중 2가지 이상을 사용하여 최소 10자리 이상 입력해주세요.',
    }),
});
export const signupSchema = z
  .object({
    phoneNumber: z
      .string({ required_error: '전화번호를 입력해주세요.' })
      .regex(phoneRegex, { message: '전화번호 양식에 맞게 작성해주세요.' }),
    email: z
      .string({ required_error: '이메일을 입력해주세요.' })
      .regex(emailRegex, { message: '이메일 양식에 맞게 작성해주세요.' }),
    code: z.string(),
    password: z
      .string({ required_error: '비밀번호를 입력해주세요.' })
      .regex(passwordRegex, {
        message:
          '영문,숫자,특수문자 중 2가지 이상을 사용하여 최소 10자리 이상 입력해주세요.',
      }),
    passwordCheck: z.string({ required_error: '비밀번호를 입력해주세요.' }),
    name: z
      .string({ required_error: '이름을 입력해주세요.' })
      .min(2, { message: '이름은 2글자 이상이어야 합니다.' }),

    nickname: z.string({ required_error: '닉네임을 입력해주세요.' }).min(3, {
      // .regex(nicknameRegex, {
      message:
        '한글,영문,숫자를 사용하여 최소 2자에서 최대 12자의 닉네임을 입력해주세요.',
    }),
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordCheck'],
  });
