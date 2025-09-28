import { useTextFields } from "@/hooks/useTextFields";
import React from "react";
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import TextFieldComponent from "@/components/common/TextFieldComponent";

const FormGridSection: React.FC = () => {
  console.log("Rendering FormGridSection");
  const fields = useTextFields();
  return (
    <>
      <Grid container spacing={4}>
        {fields.map((field, index) => (
          <Grid item xs={6} key={index}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              {/* Input field */}
              <TextFieldComponent label={field.label} type={field.type} width="110%"/>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FormGridSection;
