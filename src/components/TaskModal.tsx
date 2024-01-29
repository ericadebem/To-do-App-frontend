import { ITask } from "../util/Interfaces";

interface ITaskProps {
  task: ITask;
}

export const TaskModal = ({ task }: ITaskProps) => {
  const {title, date, action, periodicity } = task;
  const dateString = new Date(date).toLocaleDateString();
  return (
    <div className="modal">
      <i className="fa fa-trash-o" aria-hidden="true"></i>
      <p>{title}</p>
      <p>{dateString}</p>
      <p>{action}</p>
      <p>{periodicity}</p>
    </div>
  );
};
