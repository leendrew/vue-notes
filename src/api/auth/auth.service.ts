import { apiInternal } from '@/api/internal.api';
import type { GetMyselfResponseDto, LoginRequestDto, LoginResponseDto } from './auth.types';

const PATH = '/auth';

export const authService = {
  getMyself() {
    return apiInternal.get<GetMyselfResponseDto>(PATH);
  },
  login(payload: LoginRequestDto) {
    return apiInternal.post<LoginResponseDto>(PATH, payload);
  },
  logout() {
    return apiInternal.delete(PATH);
  },
};
