import { apiInternal } from '@/api/internal.api';
import type { RegisterRequestDto, RegisterResponseDto } from './register.types';

const PATH = '/register';

export const registerService = {
  register(payload: RegisterRequestDto) {
    return apiInternal.post<RegisterResponseDto>(PATH, payload);
  },
};
