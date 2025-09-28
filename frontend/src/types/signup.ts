import { colorsStatus } from "@/utilities/constants";

import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

/* 
- Custom props for the button component

- the cause of using it an interface not a button to extend mui button props to allow external properties for button component to make it flexible a
*/

export interface CustomButtonProps extends MuiButtonProps {
  text: string;
  bgColor: colorsStatus; 
}

// Props for the Heading component

export type HeadingProps = {
  mainText: string;
  subText: string;
};

// this type is used in the tsx component ( TextFieldComponent.tsx ) and in the custom hook ( useFields ) to type the field and type the function (what will it return?)

export type TextFieldProps = {
  label: string;
  type: string;
  width?: string;
};