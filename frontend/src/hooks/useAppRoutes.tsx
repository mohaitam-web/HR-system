// this memoized array is used to keep routes in the cache not to create another array in the memorey every render

import { useMemo } from "react";
import { AppRoute } from "@/types/routes";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Dashboard from "@/pages/protected/Dashboard";
import { routeStatus } from "@/utilities/constants";
import { Navigate } from "react-router-dom";

export const useAppRoutes = (): AppRoute[] => {
  return useMemo<AppRoute[]>(
    () => [
      { path: "/signup", element: <Signup />, type: routeStatus.AUTH },
      { path: "/login", element: <Login />, type: routeStatus.AUTH },
      {
        path: "/",
        element: <Navigate to="/dashboard" replace />,
        type: routeStatus.PROTECTED,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        type: routeStatus.PROTECTED,
      },
    ],
    []
  );
};
