import type { Email, Password, User } from '../auth';

export interface RegisterRequestDto {
  email: Email;
  password: Password;
  confirm_password: Password;
}

export type RegisterResponseDto = User;
