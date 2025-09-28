// this array is used in the signup form to render the input fields

import { useMemo } from "react";

export const useFields = () => {
  return useMemo(() => [
    { label: "First Name" },
    { label: "Last Name" },
    { label: "E-mail Address" },
    { label: "Phone Number" },
    { label: "Password", type: "password" },
    { label: "Confirm Password", type: "password" },
  ], []);
};
