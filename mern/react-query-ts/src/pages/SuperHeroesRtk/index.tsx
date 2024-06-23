import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../../hooks/useSuperHeroesData";

const SuperHeroesRtk = () => {
  const { data, isLoading, isError, error, isFetching, refetch } =
    useSuperHeroesData();

  // if (isLoading || isFetching) {
  if (isLoading) {
    return <>Loading ...</>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">SuperHero Rtk</h1>
      <button
        className="border-2 p-2 rounded-lg"
        onClick={() => {
          refetch();
        }}
      >
        Get All Superheros
      </button>

      <ul className="space-y-4">
        {data?.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded shadow hover:bg-gray-100 relative"
          >
            <h2 className="text-xl font-semibold">{post.name}</h2>
            <p className="text-gray-700">{post.alterEgo}</p>
            <Link
              className="absolute right-0 top-6 border-2 rounded-lg p-2"
              to={`/superhero-rtk/${post.id}`}
            >
              view
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuperHeroesRtk;
