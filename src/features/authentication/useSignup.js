import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        `account successfully created! please verify the new account from ${user?.email}'s email.`
      );
      console.log(user);
    },
  });

  return { signup, isLoading };
}
