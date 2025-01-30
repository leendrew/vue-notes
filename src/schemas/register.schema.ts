import { z } from 'zod';
import { emailSchema, passwordSchema } from './shared.schema';

export const registerSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirm_password: passwordSchema,
  })
  .refine(({ password, confirm_password }) => password === confirm_password, {
    message: 'Пароли должны совпадать',
    path: ['confirm_password'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
