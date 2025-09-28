import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TextFieldProps } from "@/types/signup";

const TextFieldComponent = ({ label ,type, width }: TextFieldProps) => {
  console.log("Rendering TextFieldComponent");
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bold",
          color: "primary.main",
          fontSize: "16px",
          mb: 0.5,
        }}
      >
        {label}
      </Typography>

      <TextField
        fullWidth
        type={type || "text"}
        variant="outlined"
        sx={{
          width,
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            height: "42px",
            backgroundColor: "#fff",
            "& input": {
              padding: "10px 14px",
              fontSize: "14px",
              color: "#333",
              "&::placeholder": {
                color: "#999",
                opacity: 1,
              },
            },
            "& fieldset": {
              borderColor: "#D1D5DB",
              borderWidth: "2px",
            },
            "&:hover fieldset": {
              borderColor: "#9CA3AF",
              borderWidth: "2px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
              borderWidth: "2px",
            },
          },
        }}
      />
    </Box>
  );
};

export default TextFieldComponent;
