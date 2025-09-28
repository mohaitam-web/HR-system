import React from "react";
import MuiButton from "@mui/material/Button";
import { colorsStatus } from "@/utilities/constants";
import { CustomButtonProps } from "@/types/signup";

/**
 * CustomButton Component
 * ----------------------
 * A wrapper around MUI's Button that:
 * - Supports custom background color mapping (e.g., secondary)
 * - Accepts all external MUI Button props via spread operator
 * - Provides consistent styling (bold text, no box shadow, padding)
 */
const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  bgColor,
  ...props
}) => {
  console.log("CustomButton rendered");

  return (
    <MuiButton
      {...props} // Forward external props (onClick, sx, etc.)
      variant="contained"
      color={
        bgColor === colorsStatus.PRIMARY
          ? "primary"
          : bgColor === colorsStatus.SECONDARY
          ? "secondary"
          : "none"
      }
      sx={{
        fontWeight: "bold",
        textTransform: "none",
        boxShadow: "none",
        px: 5,
        py: 1.5,
        ...props.sx, // Allow overrides through external sx
      }}
    >
      {text}
    </MuiButton>
  );
};

export default CustomButton;
