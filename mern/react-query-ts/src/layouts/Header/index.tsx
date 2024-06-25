import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white">
      <header className="container mx-auto p-4">
        <nav className="flex justify-between items-center">
          <div className="text-lg font-semibold">
            <Link to="/" className="hover:text-gray-400">
              React Query
            </Link>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/superhero-axios" className="hover:text-gray-400">
                SuperHero Axios
              </Link>
            </li>
            <li>
              <Link to="/superhero-rtk" className="hover:text-gray-400">
                SuperHero RTK
              </Link>
            </li>
            <li>
              <Link to="/rtk-parallel/" className="hover:text-gray-400">
                SuperHero RTK ParallelQueries
              </Link>
            </li>
            <li>
              <Link to="/dynamic-parallel/" className="hover:text-gray-400">
                SuperHero RTK Dynamic ParallelQueries
              </Link>
            </li>
            <li>
              <Link to="/rtk-dependent/" className="hover:text-gray-400">
                SuperHero RTK Dynamic DependentQueries
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
