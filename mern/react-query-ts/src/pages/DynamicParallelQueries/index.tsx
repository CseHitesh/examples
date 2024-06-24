import { useQueries } from "@tanstack/react-query";
import { fetchSuperHero } from "../../hooks/useSuperHeroData";

const DynamicParallelQueries = ({ heroIds }: { heroIds: number[] }) => {
  const superHeroQueries = useQueries({
    queries: heroIds.map((heroId) => {
      return {
        queryKey: ["SuperHero", heroId],
        queryFn: fetchSuperHero,
      };
    }),
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        SuperHero RTK Dynamic ParallelQueries
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {superHeroQueries.map((query, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            {query.isLoading ? (
              <div>Loading...</div>
            ) : query.isError ? (
              <div>Error: {query.error.message}</div>
            ) : (
              <div>
                <ul className="space-y-4">
                  {query.data?.map((superhero) => (
                    <li
                      key={superhero.id}
                      className="p-4 border rounded shadow hover:bg-gray-100 relative"
                    >
                      <h2 className="text-xl font-semibold">
                        {superhero.name}
                      </h2>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicParallelQueries;
