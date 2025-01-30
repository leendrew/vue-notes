export type Email = string;

export type Password = string;

export interface User {
  id: number;
  email: Email;
}

export type GetMyselfResponseDto = User;

export interface LoginRequestDto {
  email: Email;
  password: Password;
}

export interface LoginResponseDto {
  accessToken: string;
}
