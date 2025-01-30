import { z } from 'zod';
import { ERROR_MESSAGE } from './shared.schema';

export const createNoteSchema = z.object({
  title: z.string({ required_error: ERROR_MESSAGE.required }),
  content: z.string({ required_error: ERROR_MESSAGE.required }),
});

export type CreateNoteSchema = z.infer<typeof createNoteSchema>;
