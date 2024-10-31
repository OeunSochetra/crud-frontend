export interface IMeta {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  stock: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ICreateProduct {
  name: string;
  price: number | null;
  description: string;
  stock: number | null;
}

export interface ISignInResponse {
  message: string;
  data: {
    accessToken: string;
  };
  meta?: Record<string, any>;
}

export interface ISignIn {
  username: string;
  password: string;
}
