import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const HomeLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
