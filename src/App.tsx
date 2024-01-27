import { Outlet } from "react-router-dom";
import { FetchData } from "./util/FetchData";
import { useEffect } from "react";
import { TaskContext } from "./context/TaskContext"

import "./style/main.scss";

export const App = () => {
    return (
    <>
      <main>
        <Outlet/>
      </main>
    </>
  );
};

