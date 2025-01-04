import * as z from 'zod';

export const signInScheme = z.object({
  username: z
    .string({
      required_error: 'Username is required',
    })
    .min(1, 'Username must be at least 1 character long'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(1, 'Password must be at least 1 character long'),
});

export const signUpScheme = z.object({
  fullname: z
    .string({
      required_error: 'Fullname is required',
    })
    .min(1, 'Minimal 1 karakter'),
  username: z
    .string({
      required_error: 'Username is required',
    })
    .min(1, 'Minimal 1 karakter!'),
  email: z.string().email({
    message: 'Email tidak valid!',
  }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, 'Minimal 8 karakter')
    .max(32, 'Maksimal 32 karakter')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&^()]{8,}$/, {
      message: `Kata sandi harus minimal 8 karakter, mengandung huruf besar, huruf kecil, dan setidaknya satu simbol.`,
    }),
});

export const forgotPasswordScheme = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email()
    .min(1, 'Email must be at least 1 character long'),
});

export type SignInSchemeType = z.infer<typeof signInScheme>;
export type SignUpSchemeType = z.infer<typeof signUpScheme>;
export type ForgotPasswordSchemeType = z.infer<typeof forgotPasswordScheme>;
