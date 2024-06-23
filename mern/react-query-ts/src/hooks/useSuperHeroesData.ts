import { useQuery } from "@tanstack/react-query";
import apiClient from "../utils/apiClient";

interface Superhero {
  id: number;
  name: string;
  alterEgo: string;
}

const fetchSuperHeroes = async () => {
  return await apiClient.get("/superheroes").then((result) => result.data);
};

export const useSuperHeroesData = () => {
  return useQuery<Superhero[]>({
    queryKey: ["superhero"],
    queryFn: fetchSuperHeroes,
    // staleTime: 30 * 1000, //30 sec it will show stale data used where data is not updated mostly
    // refetchOnMount: true, //by default it true other options false or "always"
    // refetchOnWindowFocus: true, // by default it's true
    // refetchInterval: 1000, //default false but if u want to real time data then u can use it
    // refetchIntervalInBackground: true, //for refetching in background too if browser window is not on focus
    // enabled: enabled, // if we want to explicitly tell that not call it then we use it
    // select(data) {
    //   return data.filter((superhero) => superhero.id > 2);
    // }, // this is used for transformation of the data
  });

  // Note: onSuccess & onError are not available in latest react-query version in useQuery
};
