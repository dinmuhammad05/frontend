export interface IAuthData {
  token: string;
  user: {
    id: string;
    username: string;
    fullName: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  };
}
