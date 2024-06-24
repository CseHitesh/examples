import { useEffect, useState } from "react";
import apiClient from "../../utils/apiClient";

interface Superhero {
  id: number;
  name: string;
  alterEgo: string;
}

const SuperHeroAxios = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Superhero[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await apiClient.get("/superheroes");
        setPosts(result.data);
      } catch (err) {
        setError("Failed to fetch posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <>Loading ...</>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">SuperHero Axios</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
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

export default SuperHeroAxios;
