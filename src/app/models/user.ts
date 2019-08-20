export interface User {
  email: string;
  id: number;
  isAdmin: boolean;
  username: string;
}

export interface UsersResponse {
  data: User[];
  status: number;
}
