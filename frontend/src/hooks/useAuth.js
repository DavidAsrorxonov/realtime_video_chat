import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { login, signup } from "../lib/api";

const useAuth = (type) => {
  const queryClient = useQueryClient();

  const { mutate, error, isPending } = useMutation({
    mutationFn: type === "login" ? login : type === "signup" ? signup : null,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  });

  return { mutate, error, isPending };
};

export default useAuth;
