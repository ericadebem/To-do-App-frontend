import { ITask } from "../util/Interfaces";
import { DeleteData } from "../util/FetchData";
import { UpdateData } from "../util/FetchData";

interface ITaskProps {
  task: ITask;
}

export const TaskModal = ({ task }: ITaskProps) => {
  const { title, date } = task;
  const dateString = new Date(date).toLocaleDateString();

  return (
    <div className="modal">
      <div>
        <p>{title}</p>
        <p>|</p>
        <p>{dateString}</p>
      </div>
      <div>
        <button
          className="Test"
          onClick={async () => {
            await DeleteData("task", task._id);
            window.location.reload();
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
        <button
          onClick={async () => {
            await UpdateData("task", task._id);
            window.location.reload();
          }}
        >
          <i className="far fa-edit"></i>
        </button>
      </div>
    </div>
  );
};
