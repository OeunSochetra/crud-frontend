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
  description: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
