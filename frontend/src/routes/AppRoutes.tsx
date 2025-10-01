import { useAppRoutes } from "@/hooks/useAppRoutes";
import Layout from "@/layouts/Layout";
import { routeStatus } from "@/utilities/constants";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes: React.FC = () => {
  console.log("App router rendered");
  const routes = useAppRoutes();

  return (
    <BrowserRouter>
      <Routes>
        {/* AUTH routes (no layout) */}
        {routes
          .filter((r) => r.type === routeStatus.AUTH)
          .map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}

        {/* PROTECTED routes (with layout + outlet) */}
        <Route element={<Layout />}>
          {routes
            .filter((r) => r.type === routeStatus.PROTECTED)
            .map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
