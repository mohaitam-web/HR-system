import { NavbarItem } from "@/types/layout";
import React, { useMemo } from "react";

const useNavLinks = (): NavbarItem[] => {
  return useMemo<NavbarItem>(
    () => [
      { to: "/dashboard", label: "Dashboard" },
      { to: "/requests", label: "Requests" },
      { to: "/payroll", label: "Payroll" },
      { to: "/company", label: "Company" },
      { to: "/extras", label: "Extras" },
    ],
    []
  );
};

export default useNavLinks;
