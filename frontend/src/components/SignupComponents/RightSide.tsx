import React from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CustomButton from "../common/CustomButton";
import { colorsStatus } from "@/utilities/constants";
import Heading from "../common/Heading";
import FormGridSection from "./FormGridSection";
import CheckboxChoice from "../common/CheckboxChoice";

const RightSide: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "60%",
        pt: 8,
        pl: 5,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

        {/* Heading Section */}
      <Box sx={{display: "flex", flexDirection: "column", gap: 1.5}}>  
        <Heading
          mainText="Welcome to XCELTECH"
          subText="Register your account"
        />
      </Box>
        {/* ===== Heading Section ====== */}

        {/* Form Grid Section */}
        <Box>
          <FormGridSection />

          {/* Checkbox Section */}
          <Box
            sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 1.5 }}
          >
            <CheckboxChoice text={"Yes, I want to receive KRIS newsletters"} />

            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#D1D5DB",
                    "&.Mui-checked": {
                      color: "primary.main",
                    },
                    "& .MuiSvgIcon-root": {
                      fontSize: 20,
                    },
                  }}
                />
              }
              label={
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", fontSize: "14px" }}
                >
                  I agree to all the{" "}
                  <span
                    style={{
                      color: "#102A75", // primary.main color
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Terms, Privacy Policy
                  </span>
                </Typography>
              }
            />
          </Box>

          {/* Create Account Button */}
          <CustomButton
            text="Create Account"
            bgColor={colorsStatus.PRIMARY}
            sx={{ mt: 2 }}
          >
            Create Account
          </CustomButton>

          {/* Login Link */}
          <Box sx={{ mt: 2, textAlign: "left" }}>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontSize: "14px" }}
            >
              Already have an account?{" "}
              <span
                style={{
                  color: "#102A75",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontWeight: "500",
                }}
              >
                Log In
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RightSide;
