import React, { createContext, useContext, ReactNode } from "react";
import { TasksPage } from "../pages/TasksPage";
import { AddTaskPage } from "../pages/AddTasksPage";

interface ITask {
  title: string;
  date: number;
  action: string;
  periodicity: number;
}

interface ITaskProps {
  data: ITask;
}

export const TaskContext = ({ data }: ITaskProps) => {
  const { title, date, action, periodicity } = data;
  return (
    <div>
      <p>{title}</p>
      <p>{date}</p>
      <p>{action}</p>
      <p>{periodicity}</p>
    </div>
  );
};
