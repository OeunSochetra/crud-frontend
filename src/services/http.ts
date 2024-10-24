// import axios, { AxiosInstance, AxiosResponse } from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URI;

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
  params: { page: number; limit: number; search: string }
): Promise<Response<T>> => {
  // Construct query string from params
  const queryString = new URLSearchParams({
    page: params.page.toString(),
    limit: params.limit.toString(),
    search: params.search,
  }).toString();

  // Fetch data with query parameters
  const response = await fetch(`${baseUrl}/${endpoint}?${queryString}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

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
    },
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  return (await response.json()) as T;
};
