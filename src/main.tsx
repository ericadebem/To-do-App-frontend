import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./util/appRouter";
import "./style/main.scss"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router ={appRouter} />
    );
