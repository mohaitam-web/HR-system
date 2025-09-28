import React from "react";
import { Box, FormControlLabel, Typography, Checkbox } from "@mui/material"; 

const CheckboxChoice: React.FC = ({ text }: {text: string}) => {
  console.log('checkbox choice rendered');
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
