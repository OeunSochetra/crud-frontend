import { defineStore } from "pinia";
import { ISignIn, IMeProfile } from "../constants/common";
import { ref } from "vue";
import { get, post } from "../services/http";

export const useAuthStore = defineStore("auth", () => {
  const baseURl = "api/auth";
  const isAuthenticated = ref<boolean>(false);
  const accessToken = ref<string>("");
  const meProfile = ref<IMeProfile>();

  const SIGN_IN = async (payload: ISignIn) => {
    try {
      const res = await post<any>(`${baseURl}/login`, payload);
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

  const SIGN_UP = async (payload: ISignIn) => {
    try {
      const res = await post<any>(`${baseURl}/register`, payload);
      if (res.message === "success") {
        console.log("Register successfully)");
      } else {
        console.error("Failed to register:", res.message);
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  const GET_ME = async () => {
    try {
      const res = await get<IMeProfile>(`api/me`);
      if (res.message === "success") {
        meProfile.value = res.data;
      } else {
        console.error("Failed to get me:", res.message);
      }
    } catch (error) {
      console.error("Error getting me:", error);
    }
  };

  return {
    isAuthenticated,
    accessToken,
    meProfile,

    // Function
    SIGN_IN,
    SIGN_OUT,
    SIGN_UP,
    GET_ME,
  };
});
