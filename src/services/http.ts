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
  p0: { params: { page: number; limit: number; search: string } }
): Promise<Response<T>> => {
  // Ensure baseUrl is properly defined and used
  const response = await fetch(`${baseUrl}/${endpoint}`, {
    // Add slash if needed
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    // Improve error handling with more detailed error message
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  // Type the return value using the Response type
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
