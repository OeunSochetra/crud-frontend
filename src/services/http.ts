// import axios, { AxiosInstance, AxiosResponse } from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URI;
// const authStore = useAuthStore();
// const token = authStore?.accessToken;
const token = localStorage.getItem("accessToken");

type Response<T> = {
  data: T;
  meta?: T;
  statusCode: number;
  message: string;
};

// export function to create new product

export const post = async <T>(
  endpoint: string,
  data: T
): Promise<Response<T>> => {
  const response = await fetch(`${baseUrl}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  return (await response.json()) as Response<T>;
};

// export function to get all product

export const get = async <T>(
  endpoint: string,
  params?: { page?: number; limit?: number; search?: string }
): Promise<Response<T>> => {
  // Construct query string only if params are provided
  const queryString = params
    ? new URLSearchParams({
        ...(params.page ? { page: params.page.toString() } : {}),
        ...(params.limit ? { limit: params.limit.toString() } : {}),
        ...(params.search ? { search: params.search } : {}),
      }).toString()
    : "";

  // Fetch data with query parameters if any
  const response = await fetch(
    `${baseUrl}/${endpoint}${queryString ? `?${queryString}` : ""}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  return (await response.json()) as Response<T>;
};

// export function to delete product

export const deleteData = async <T>(
  endpoint: string,
  id: string
): Promise<T> => {
  const response = await fetch(`${baseUrl}/${endpoint}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  return (await response.json()) as T;
};
