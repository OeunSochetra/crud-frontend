// import axios, { AxiosInstance, AxiosResponse } from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URI;

type Response<T> = {
  data: T;
  meta?: any;
  statusCode: number;
  message: string;
};

// Update the get function to accept a generic type T
export const get = async <T>(endpoint: string): Promise<Response<T>> => {
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
