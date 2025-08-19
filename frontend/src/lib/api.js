import { axiosInstance } from "./axios";

export const signup = async (data) => {
  const res = await axiosInstance.post("/auth/signup", data);

  return res.data;
};

export const login = async (data) => {
  const res = await axiosInstance.post("/auth/login", data);

  return res.data;
};

export const logout = async () => {
  const res = await axiosInstance.post("/auth/logout");

  return res.data;
};

export const getAuthUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  } catch (error) {
    console.log("Error in getting auth user", error);
    return null;
  }
};

export const completeOnboarding = async (userData) => {
  const res = await axiosInstance.post("/auth/onboarding", userData);
  return res.data;
};
