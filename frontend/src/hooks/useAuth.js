import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { login, logout, signup } from "../lib/api";

const useAuth = (type) => {
  const queryClient = useQueryClient();

  const { mutate, error, isPending } = useMutation({
    mutationFn:
      type === "login"
        ? login
        : type === "signup"
        ? signup
        : type === "logout"
        ? logout
        : null,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  });

  if (type === "login" || type === "signup") {
    return { mutate, error, isPending };
  }

  return { mutate };
};

export default useAuth;
