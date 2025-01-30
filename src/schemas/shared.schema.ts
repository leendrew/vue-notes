import { z } from 'zod';

export const ERROR_MESSAGE = {
  required: 'Это поле обязательно для заполнения',
  email: 'Невалидный email',
  minLength: 'Минимальная длина:',
  maxLength: 'Минимальная длина:',
} as const;

export const RULES = {
  password: {
    min: 4,
    max: 12,
  },
} as const;

export const passwordSchema = z
  .string({ required_error: ERROR_MESSAGE.required })
  .min(RULES.password.min, `${ERROR_MESSAGE.minLength} ${RULES.password.min}`)
  .max(RULES.password.max, `${ERROR_MESSAGE.maxLength} ${RULES.password.max}`);

export const emailSchema = z
  .string({ required_error: ERROR_MESSAGE.required })
  .email(ERROR_MESSAGE.email);
