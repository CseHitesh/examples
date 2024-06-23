import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import SuperHeroAxios from "../pages/SuperHeroAxios";
import SuperHeroRtk from "../pages/SuperHeroRtk";
import HomeLayout from "../layouts/HomeLayout";
import SuperHeroesRtk from "../pages/SuperHeroesRtk";

// Define your route objects with paths and components

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/superhero-axios",
        element: <SuperHeroAxios />,
      },
      {
        path: "/superhero-rtk",
        element: <SuperHeroesRtk />,
      },
      {
        path: "/superhero-rtk/:heroId",
        element: <SuperHeroRtk />,
      },
    ],
  },
]);

export default router;
