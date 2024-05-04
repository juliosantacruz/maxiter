import React from "react";

import { RoutesDirectory } from "./RoutesDirectory";

import Detalle from "@/pages/Detalles/Detalle";
import Inicio from "@/pages/Inicio/Inicio";
import { useRoutes } from "react-router-dom";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: RoutesDirectory.HOME.slug, element: <Inicio /> },
    { path: RoutesDirectory.DETALLES.name, element: <Detalle /> },


    { path: "/*", element: <p>Page not found</p> },
  ]);

  return routes;
};

export default AppRoutes;
