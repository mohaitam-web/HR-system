import { ReactElement } from "react";

export interface AppRoute {
  path: string;
  element: ReactElement;
  layout?: ReactElement; // optional layout wrapper
}
