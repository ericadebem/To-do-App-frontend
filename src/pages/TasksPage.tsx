import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { FetchData } from "../util/FetchData";
import { TaskModal } from "../components/TaskModal";
import { ITask } from "../util/Interfaces";

const tasks: ITask[] = [
  {
    title: "First task",
    date: "Montag",
    _id: "44",
    action: "new",
    periodicity: 8,
  },
  {
    title: "Second task",
    date: "Donnerstag",
    _id: "5",
    action: "letzt",
    periodicity: 3,
  },
];

const renderTasks = (tasks: any[]) => {
  if (tasks.length <= 0) {
    return <p>NO TASKS, ADD NEW</p>;
  } else {
    const allTasks = tasks.map((task, index) => (
      <div key={index}>
        <p>{task.title}</p>
        </div>
            ));

    return <div>{allTasks}</div>;
  }
};

export const TasksPage = () => {
  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {
    FetchData("task").then((data) => setAllTasks(data.task));
  }, []);

  const handleDelete = async (id: string) => {
    await FetchData(`task/${id}`, { method: "DELETE" });
    setAllTasks(allTasks.filter((task) => task._id !== id));
  };

  return (
    <div>
      <div>{renderTasks(allTasks)}</div>

      {allTasks && allTasks.map((task) => <TaskModal task={task} key={task._id} />)}
    </div>
  );
};
