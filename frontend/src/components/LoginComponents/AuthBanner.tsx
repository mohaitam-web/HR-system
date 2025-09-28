import React from "react";
import { Box, Typography } from "@mui/material";
import { overlayStyle } from "@/utilities/overlayStyle";
import { dashStyle } from "@/styles/login";

const AuthBanner: React.FC = () => {
  console.log("Auth banner rendered")
  return (
    <Box
      className="banner"
      sx={{
        width: "55%",
        backgroundImage: 'url("/loginPhoto.webp")',
        display: "flex",
        justifyContent: "end",
        gap: 20,
        p: 4,
      }}
    >
      <Box sx={(theme) => overlayStyle(theme)} />

      <Typography
        variant="h1"
        sx={{
          color: "#ffffff",
          fontWeight: "bold",
          fontSize: 33,
          zIndex: 10,
        }}
      >
        Manage all{" "}
        <span
          style={{
            color: "#FFC20E",
          }}
        >
          HR Operations{" "}
        </span>
        from the comfort of your home
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Typography sx={{ ...dashStyle, backgroundColor: "secondary.main" }} />
        <Typography sx={dashStyle} />
        <Typography sx={dashStyle} />
      </Box>
    </Box>
  );
};

export default AuthBanner;
