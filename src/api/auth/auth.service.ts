import { apiInternal } from '@/api/internal.api';
import type { GetMyselfResponseDto, LoginRequestDto, LoginResponseDto } from './auth.types';
import { HTTP_STATUS_CODE } from '@/constants';

const PATH = '/auth';

export const authService = {
  getMyself() {
    return apiInternal.get<GetMyselfResponseDto>(PATH);
  },
  async login(payload: LoginRequestDto) {
    const response = await apiInternal.post<LoginResponseDto>(PATH, payload);
    if (response.status === HTTP_STATUS_CODE.ok) {
      localStorage.setItem('accessToken', response.data.accessToken);
    }

    return response;
  },
  async logout() {
    const response = await apiInternal.delete(PATH);
    if (response.status === HTTP_STATUS_CODE.ok) {
      localStorage.removeItem('accessToken');
    }

    return response;
  },
};
