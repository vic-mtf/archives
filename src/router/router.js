import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppTest from "../test/App.test";
import Archives from "../views/Archives";

const PUBLIC_URL = import.meta.env.BASE_URL;

const routes = [
  {
    element: AppTest,
    path: "/test",
  },
  {
    element: Archives,
    path: "*",
  },
].map(({ element, ...data }) => ({
  element: React.createElement(element),
  ...data,
}));

const router = createBrowserRouter(routes, { basename: PUBLIC_URL });

export default router;
