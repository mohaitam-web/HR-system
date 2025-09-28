import React from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

const CheckboxChoice: React.FC = ({ text }: { text: string }) => {
  console.log("checkbox choice rendered");
  return (
    <Box>
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
            sx={{ color: "text.secondary", fontSize: "16px" }}
          >
            {text}
          </Typography>
        }
      />
    </Box>
  );
};

export default CheckboxChoice;
