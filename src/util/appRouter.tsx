import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { TasksPage } from "../pages/TasksPage";
import { AddTasksPage } from "../pages/AddTasksPage";

export const appRouter = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    children: [
        { path: "/", element: <TasksPage/> },
        { path: "/addtasks", element: <AddTasksPage/> }
    ],
},
]);