import { useQuery } from "@tanstack/react-query";
import apiClient from "../../utils/apiClient";
interface Superhero {
  id: number;
  name: string;
  alterEgo: string;
}

const SuperHeroRtk = () => {
  const getSuperHero = async () => {
    return await apiClient.get("/superheroes").then((result) => result.data);
  };

  const { data, isLoading, isError, error, isFetching } = useQuery<Superhero[]>(
    {
      queryKey: ["superhero"],
      queryFn: getSuperHero,
    }
  );

  if (isLoading || isFetching) {
    return <>Loading ...</>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">SuperHero Rtk</h1>
      <ul className="space-y-4">
        {data?.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded shadow hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold">{post.name}</h2>
            <p className="text-gray-700">{post.alterEgo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuperHeroRtk;
