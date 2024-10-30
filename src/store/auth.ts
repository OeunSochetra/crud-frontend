import { defineStore } from "pinia";
import { ILogin } from "../constants/common";
import { ref } from "vue";
import { post } from "../services/http";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref<boolean>(false);
  const accessToken = ref<string>("");

  const LOGIN = async (payload: ILogin) => {
    try {
      const res = await post<any>("api/login", payload);
      if (res.message === "success") {
        accessToken.value = res.data.accessToken;
        isAuthenticated.value = true;
        localStorage.setItem("accessToken", accessToken.value);
      } else {
        console.error("Failed to login:", res.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const LOGOUT = () => {
    isAuthenticated.value = false;
    accessToken.value = "";
    localStorage.removeItem("accessToken");
  };

  //   const REGISTER = () => {};

  return {
    isAuthenticated,
    accessToken,

    // Function
    LOGIN,
    LOGOUT,
    // REGISTER,
  };
});
