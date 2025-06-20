export interface LoginRequest {
  username: string;
  password: string;
};

export interface LoginResponse {
  access_token: string;
};

export interface RegistrationRequest extends LoginRequest {
    firstName: string;
    lastName: string;
};

export interface RegistrationResponse {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}