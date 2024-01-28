import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { FetchData } from "../util/FetchData";
import { TaskModal } from "../components/TaskModal";

const renderTasks = (tasks: any[]) => {
  if (tasks.length <= 0) {
    return <p>NO TASKS, ADD NEW</p>;
  } else {
    return <p>ALL TASKS</p>;
  }
}

export const TasksPage = () => {
  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {
    FetchData("task/").then((data) => setAllTasks(data.task));
  }, []);

  const handleDelete = async (id: string) => {
    await FetchData(`task/${id}`, { method: 'DELETE' });
    setAllTasks(allTasks.filter(task => task._id !== id));
  }

  return (
    <div>
      <div>{renderTasks(allTasks)}</div>

      {allTasks &&
        allTasks.map((task) => <TaskModal task={task} key={task._id} />)}
    </div>
  );
};
