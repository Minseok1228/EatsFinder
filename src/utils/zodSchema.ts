import { z } from 'zod';

export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const phoneRegex = /^010\d{8}$/;
const passwordRegex =
  /^(?=.*[A-Za-z].*[0-9]|[A-Za-z].*[@$!%*?&]|[0-9].*[@$!%*?&]|[0-9].*[A-Za-z]|[@$!%*?&].*[A-Za-z]|[@$!%*?&].*[0-9])[A-Za-z0-9@$!%*?&]{10,}$/;
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
        '영문, 숫자, 특수문자(@,$,!,*,?,#,^)을 포함한 8~16자리를 입력해주세요.',
    }),
});
export const signupSchema = z
  .object({
    name: z
      .string({ required_error: '이름을 입력해주세요.' })
      .min(3, { message: '이름은 2글자 이상이어야 합니다.' }),
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
        message: `영문, 숫자, 특수문자(@,$,!,*,?,#,^,%,&)을 포함한 8~16자리를 입력해주세요.`,
      }),
    passwordCheck: z.string({ required_error: '비밀번호를 입력해주세요.' }),

    nickname: z.string({ required_error: '닉네임을 입력해주세요.' }).min(2, {
      message:
        '한글,영문,숫자를 사용하여 최소 2자에서 최대 12자의 닉네임을 입력해주세요.',
    }),
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordCheck'],
  });
