// this file is used to type any thing related with the routes

import { routeStatus } from "@/utilities/constants";
import { ReactElement } from "react";

export interface AppRoute {
  path: string;
  element: ReactElement;
  type: routeStatus,
}
