import { Outlet, useMatches } from "react-router-dom";
import React, { useEffect } from "react";
import type { RouteHandle } from "../lib/interfaces";

const HomeLayout: React.FC = () => {
  const matches = useMatches();

  const activeRoute = matches.find((match) => (match.handle as RouteHandle)?.pageName);
  const pageName = (activeRoute?.handle as RouteHandle)?.pageName || "Page";

  useEffect(() => {
    document.title = `Go4Bill | ${pageName}`;
  }, [pageName]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
