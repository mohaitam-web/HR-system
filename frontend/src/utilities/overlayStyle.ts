// This function handles the background color which appears as an overlay on the banner image.


// This function is used in signup page and login page

import { alpha, Theme } from "@mui/material/styles";

export const overlayStyle = (theme: Theme) => ({
  position: "absolute",
  inset: 0,
  backgroundColor: alpha(theme.palette.primary.main, 0.95),
  mixBlendMode: "multiply",
  zIndex: 0,
});
