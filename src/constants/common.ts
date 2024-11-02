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

export interface IBook {
  originalPrice: number;
  discountPrice: number;
  author: string;
  createdAt: string;
  description: string;
  ratingStar: number;
  ratingCount: number;
  image: string;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
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
