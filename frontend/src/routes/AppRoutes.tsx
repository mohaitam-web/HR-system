import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import { AppRoute } from "../types/routes.interface";

const appRoutes: AppRoute[] = [
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
];

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map(({ path, element, layout }) => (
          <Route
            key={path}
            path={path}
            element={
              layout ? (
                <>
                  {layout}
                  {element}
                </>
              ) : (
                element
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
