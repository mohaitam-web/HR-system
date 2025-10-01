import Header from "@/components/LayoutComponents/Header";
import Box from "@mui/material/Box";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  console.log("Layout rendered");
  return (
    <>
      <Header />
      <Box sx={{backgroundColor: "skyBg.main", height: "90vh"}}>
        <Outlet /> {/* where the nested routes will render */}
      </Box>
    </>
  );
};

export default Layout;
