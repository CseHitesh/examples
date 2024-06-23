import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../../hooks/useSuperHeroData";

const SuperHeroRtk = () => {
  const { heroId } = useParams();

  const { data, isLoading, isError, error } = useSuperHeroData({
    heroId,
  });
  if (isLoading) {
    return <>Loading ...</>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">SuperHero Rtk Details</h1>

      <h2 className="text-xl font-semibold">{data?.name}</h2>
      <p className="text-gray-700">{data?.alterEgo}</p>
    </div>
  );
};

export default SuperHeroRtk;
