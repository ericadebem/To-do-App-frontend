import { useEffect, useState } from "react";
import { FetchData } from "../util/FetchData";
import { TaskModal } from "../components/TaskModal";
import { ITask } from "../util/Interfaces";

// const tasks: ITask[] = [
//   {
//     title: "First task",
//     date: "Montag",
//     _id: "44",
//     action: "new",
//     periodicity: 8,
//   },
//   {
//     title: "Second task",
//     date: "Donnerstag",
//     _id: "5",
//     action: "letzt",
//     periodicity: 3,
//   },
// ];
export const TasksPage = () => {
  const [allTasks, setAllTasks] = useState<ITask[]>([]);
  const [updateTask, setUpdateTask] = useState<ITask | null>(null);

  useEffect(() => {
    FetchData("task").then((data) => setAllTasks(data.task));
  }, []);

  const handleDelete = async (id: string) => {
    await FetchData(`task/${id}`, { method: "DELETE" });
    setAllTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  };

  const handleUpdateClick = async (id: string, newData: string) => {
    await FetchData(`task/${id}`, { method: "PATCH", body: JSON.stringify({ newData }) });

setUpdateTask(null);
};
const renderTasks = (tasks: ITask[]) => {
  if (tasks.length <= 0) {
    return <p>NO TASKS, ADD NEW</p>;
  } else {
    return (
      <div className="task-container">
        {tasks.map((task) => (
          <TaskModal task={task} key={task._id} />
        ))}
      </div>
    );
  }
};
  return (
    <div>
      {renderTasks(allTasks)}
      {/* <button onClick={() => updateTask && handleUpdateClick(updateTask._id, "newData")}>
        SAVE
      </button> */}
    </div>
  );
};
