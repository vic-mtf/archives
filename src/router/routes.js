import React from "react";
import AppTest from "../test/App.test";
import Archives from "../views/Archives";

const routes = [
  {
    element: AppTest,
    path: "/test",
  },
  {
    element: Archives,
    path: "*",
  },
];

const parseRouter = ({ element, ...data }) => ({
  element: React.createElement(element),
  ...data,
});

export default routes.map(parseRouter);
