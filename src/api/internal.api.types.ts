import type { AxiosError } from 'axios';

export interface ApiResponseFailData {
  message: string | string[];
  error: string;
  statusCode: number;
}

export type ApiResponseFail = AxiosError<ApiResponseFailData>;
