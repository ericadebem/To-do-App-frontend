import { Outlet } from "react-router-dom";
import { FetchData } from "./util/FetchData";
import { TaskContext } from "./components/TaskModal"
import { appRouter } from "./util/appRouter";

import "./style/main.scss";

export const App = () => {
    return (
    <>
      <main>
      <h1>TODO APP</h1>
        <Outlet/>
      </main>
    </>
  );
};

