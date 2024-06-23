import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

// interface Superhero {
//   id: number;
//   name: string;
//   alterEgo: string;
// }
interface heroId {
  heroId: number;
}

const fetchSuperHero = async ({ heroId }: heroId) => {
  return await apiClient
    .get(`/superheroes?id=${heroId}`)
    .then((result) => result.data);
};

export const useSuperHeroData = ({ heroId }: heroId) => {
  return useQuery({
    queryKey: ["superhero", heroId],
    queryFn: () => fetchSuperHero({ heroId }),
    select: (data) => {
      return data[0];
    },
  });
};
