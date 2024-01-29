import { Outlet } from "react-router-dom";

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

