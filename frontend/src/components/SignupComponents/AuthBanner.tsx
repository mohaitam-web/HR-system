import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import CustomButton from "../common/CustomButton";
import { colorsStatus } from "@/utilities/constants";
import { overlayStyle } from "@/utilities/overlayStyle";

/**
 * AuthBanner Component
 * --------------------
 * A left-side banner for authentication pages that displays:
 * - Background image with a semi-transparent overlay
 * - Company logo
 * - Brief description of the platform
 * - Action buttons
 */
const AuthBanner: React.FC = () => {
  console.log("AuthBanner rendered");

  return (
    <Box
      className="banner"
      sx={{
        backgroundImage: 'url("/registerPhoto.webp")',
      }}
    >
      {/* Background overlay (semi-transparent, blended color) */}
      <Box sx={(theme) => overlayStyle(theme)} />

      {/* Foreground content */}
      <Box
        sx={{
          position: "relative", // Needed to stay above overlay
          zIndex: 1, // Places content above overlay
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Company Logo */}
        <Box sx={{ pt: 2, pb: 22 }}>
          <Box
            component="img"
            src="/logo.webp"
            alt="XCELTECH Logo"
            sx={{ height: 40, width: "auto" }}
          />
        </Box>

        {/* Text Content & Call to Action */}
        <Box sx={{ flexGrow: 1, ml: 4 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            HR Management Platform
          </Typography>

          {/* Decorative white underline bar */}
          <Box
            sx={{
              width: "20%",
              height: 10,
              borderRadius: 2,
              backgroundColor: "white",
              ml: 2,
              mb: 2,
            }}
          />

          {/* Description */}
          <Typography variant="body1" sx={{ mb: 4, ml: 2 }}>
            Manage all employees, payrolls, and other human resource operations.
          </Typography>

          {/* Action Buttons */}
          <Stack direction="row" spacing={2} sx={{ ml: 2 }}>
            <CustomButton text="Learn More" bgColor={colorsStatus.SECONDARY} />

            <CustomButton
              text="Our Features"
              bgColor={colorsStatus.NONE}
              sx={{ border: "3px solid white" }}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthBanner;
