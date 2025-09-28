import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Heading from "../common/Heading";
import TextFieldComponent from "../common/TextFieldComponent";
import CheckboxChoice from "../common/CheckboxChoice";
import { Link } from "react-router-dom";
import CustomButton from "../common/CustomButton";

const LeftSide: React.FC = () => {
  console.log("left side rendered");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        width: "45%",
        pl: 5,
        pb: 15,
        pr: 7,
      }}
    >
      <Heading mainText="Login" subText="Login to your account" />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 4 }}>
        <TextFieldComponent label="E-mail Address" type="email" width="100%" />
        <TextFieldComponent label="Password" type="password" width="100%" />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
          width: "100%",
        }}
      >
        <CheckboxChoice text="Remember me" />
        {/* I will come back here again */}
        <Link
          to="https://google.com"
          className="link-style"
          style={{ fontWeight: "bold" }}
        >
          Reset Password?
        </Link>{" "}
      </Box>

      <CustomButton text="Sign In" bgColor="primary" sx={{ mt: 2, mb: 2 }} />

      <Typography
        variant="span"
        sx={{
          textAlign: "center",
          fontSize: "16px",
          color: "secondaryText.main",
        }}
      >
        Don't have an accouny yet?
        {/*  I will come back here */}
        <Link
          to="https://google.com"
          className="link-style"
          style={{ fontWeight: "bold" }}
        >
          {" "}
          Join KPIS today
        </Link>
      </Typography>
    </Box>
  );
};

export default LeftSide;
