import React from "react";
// this file is used to define types related with layout

export type LayoutProps = {
  children: React.ReactNode;
};

// navbar item in header 
export type NavbarItem = {
  to: string;
  label: string;
}
