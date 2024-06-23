import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

const fetchSuperHero = async ({ queryKey }: { queryKey: string[] }) => {
  return await apiClient
    .get(`/superheroes?id=${queryKey[1]}`)
    .then((result) => result.data);
};

export const useSuperHeroData = ({ heroId }: { heroId: string }) => {
  return useQuery({
    queryKey: ["superhero", heroId],
    // queryFn: () => fetchSuperHero({ heroId }),// query automatically passes the queryKey from where we can get heroId
    queryFn: fetchSuperHero,
    select: (data) => {
      return data[0];
    },
  });
};
