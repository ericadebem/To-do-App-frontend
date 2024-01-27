import { useState, useEffect } from "react";
import { FetchData } from "../util/FetchData";
import axios, { AxiosError, AxiosResponse } from "axios";
import { TaskContext } from "../context/TaskContext";
import { AddTasksPage } from "../pages/AddTasksPage";

interface ITask {
  title: string;
  date: number;
  action: string;
  periodicity: number;
}
export const SendData = async (endpoint: string, data: ITask) => {
  try {
    await axios.post(`http://localhost:6060/app/${endpoint}`, data);
  } catch (error: AxiosError) {
    console.error(error);
    throw new Error(error);
  }
};

export const TasksPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: 0,
    action: "",
    periodicity: 50,
  });
  return (
    <div>
      <h1>TODO APP</h1>
      <form>
        <input
          type="text"
          placeholder="NEW TASK"
          name="newTask"
          id="newTask"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="number"
          placeholder="DATE"
          name="date"
          id="date"
          onChange={(e) =>
            setFormData({ ...formData, date: Number(e.target.value) })
          }
        />
        <input
          type="text"
          placeholder="ACTION"
          name="action"
          id="action"
          onChange={(e) => setFormData({ ...formData, action: e.target.value })}
        />
        <input
          type="number"
          placeholder="PERIODICITY"
          name="periodicity"
          id="periodicity"
          onChange={(e) =>
            setFormData({ ...formData, periodicity: Number(e.target.value) })
          }
        />

        <button onClick={() => SendData("AddTasksPage", formData)}>ADD</button>
        <button onClick={() => SendData("TasksPage", formData)}>CANCEL</button>
      </form>
    </div>
  );
};
