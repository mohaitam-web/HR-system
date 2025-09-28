import { colorsStatus } from "@/utilities/constants";

import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

// Custom props for the button component
export interface CustomButtonProps extends MuiButtonProps {
  text: string;
  bgColor: colorsStatus; 
}

// Props for the Heading component
export type HeadingProps = {
  mainText: string;
  subText: string;
};

export type textFieldCompProps = {
  label: string;
  type: string;
  width: string;
};