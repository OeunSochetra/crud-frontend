import { defineStore } from "pinia";
import { ISignIn } from "../constants/common";
import { ref } from "vue";
import { post } from "../services/http";

export const useAuthStore = defineStore("auth", () => {
  const isAuthenticated = ref<boolean>(false);
  const accessToken = ref<string>("");

  const SIGN_IN = async (payload: ISignIn) => {
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

  const SIGN_OUT = () => {
    isAuthenticated.value = false;
    accessToken.value = "";
    localStorage.removeItem("accessToken");
  };

  return {
    isAuthenticated,
    accessToken,

    // Function
    SIGN_IN,
    SIGN_OUT,
  };
});
