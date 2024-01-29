import { ITask } from "../util/Interfaces";
import { DeleteData } from "../util/FetchData";

interface ITaskProps {
  task: ITask;
}

export const TaskModal = ({ task }: ITaskProps) => {
  const {title, date} = task;
  const dateString = new Date(date).toLocaleDateString();
  return (
    <div className="modal">
      <p>{title}</p>
      <p>|</p>
      <p>{dateString}</p>
      <button onClick={()=> DeleteData("task",task._id)}>x</button>
      <i className="fa fa-trash-o" aria-hidden="true"></i>
    </div>
  );
};
