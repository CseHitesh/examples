import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

export const fetchChannel = async ({ queryKey }: { queryKey: string[] }) => {
  return await apiClient
    .get(`/channels?id=${queryKey[1]}`)
    .then((result) => result.data);
};

export const useChannelData = ({ channelId }: { channelId: string }) => {
  return useQuery({
    queryKey: ["Channel", channelId],
    queryFn: fetchChannel,
    select: (data) => {
      return data[0];
    },
    enabled: !!channelId,
  });
};
