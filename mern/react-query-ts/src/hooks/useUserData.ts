import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

export const fetchUser = async ({ queryKey }: { queryKey: string[] }) => {
  return await apiClient
    .get(`/users?id=${queryKey[1]}`)
    .then((result) => result.data);
};

export const useUserData = ({ email }: { email: string }) => {
  return useQuery({
    queryKey: ["User", email],
    queryFn: fetchUser,
    select: (data) => {
      return data[0];
    },
  });
};
