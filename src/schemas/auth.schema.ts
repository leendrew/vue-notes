import { z } from 'zod';
import { emailSchema, passwordSchema } from './shared.schema';

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type LoginSchema = z.infer<typeof loginSchema>;
