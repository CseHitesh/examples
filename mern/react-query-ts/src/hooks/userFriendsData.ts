import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

interface Friend {
  id: number;
  name: string;
}

const fetchFriends = async () => {
  return await apiClient.get("/friends/").then((result) => result.data);
};

export const useFriendsData = () => {
  return useQuery<Friend[]>({
    queryKey: ["friends"],
    queryFn: fetchFriends,
  });
};
