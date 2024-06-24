import { Link } from "react-router-dom";
import { useFriendsData } from "../../hooks/userFriendsData";
import { useSuperHeroesData } from "../../hooks/useSuperHeroesData";

const ParallelQueries = () => {
  const { data: superheroes } = useSuperHeroesData();
  const { data: friends } = useFriendsData();
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          SuperHero RTK ParallelQueries
        </h1>

        <ul className="space-y-4">
          {superheroes?.map((superhero) => (
            <li
              key={superhero.id}
              className="p-4 border rounded shadow hover:bg-gray-100 relative"
            >
              <h2 className="text-xl font-semibold">{superhero.name}</h2>
              <p className="text-gray-700">{superhero.alterEgo}</p>
              <Link
                className="absolute right-0 top-6 border-2 rounded-lg p-2"
                to={`/superhero-rtk/${superhero.id}`}
              >
                view
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Friends</h1>

        <ul className="space-y-4">
          {friends?.map((friend) => (
            <li
              key={friend.id}
              className="p-4 border rounded shadow hover:bg-gray-100 relative"
            >
              <h2 className="text-xl font-semibold">{friend.name}</h2>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ParallelQueries;
