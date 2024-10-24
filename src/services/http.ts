// import axios, { AxiosInstance, AxiosResponse } from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URI;

type Response<T> = {
  data: T;
  meta?: T;
  statusCode: number;
  message: string;
};

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
