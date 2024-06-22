import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import SuperHeroAxios from "../pages/SuperHeroAxios";
import SuperHeroRtk from "../pages/SuperHeroRtk";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/superhero-axios",
        Component: SuperHeroAxios,
      },
      {
        path: "/superhero-rtk",
        Component: SuperHeroRtk,
      },
    ],
  },
]);

export default router;
