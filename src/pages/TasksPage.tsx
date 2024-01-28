import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { FetchData } from "../util/FetchData";
import { TaskModal } from "../components/TaskModal"; // Import the TaskModal component

export const TasksPage = () => {
  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {
    FetchData("task/").then((data) => setAllTasks(data.task));
  }, []);
  return (
    <div>
      <ul>
        <li>cxxx</li>
      </ul>
      {allTasks &&
        allTasks.map((task) => <TaskModal task={task} key={task._id} />)} 
    </div>
  );
};