import React from "react";
import Typography from "@mui/material/Typography";
import { HeadingProps } from "@/types/signup";

const Heading: React.FC = ({mainText, subText}: HeadingProps) => {
  console.log('Heading component rendered');
  return (
    <>
      <Typography variant="h4" fontWeight="bold" color="primary" sx={{mb: 2}}>
        {mainText}
      </Typography>

      <Typography variant="body1" color="text.secondary">
        {subText}
      </Typography>
    </>
  );
};

export default Heading;
