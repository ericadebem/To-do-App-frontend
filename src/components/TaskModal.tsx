interface ITask {
  _id: string;
  title: string;
  date: string;
  action: string;
  periodicity: number;
}

interface ITaskProps {
  task: ITask;
  onDelete: (id: string) => void;
}

export const TaskModal = ({ task, onDelete }: ITaskProps) => {
  const { _id, title, date, action, periodicity } = task;
  const dateString = new Date(date).toLocaleDateString();
  return (
    <div>
      <i
        className="fa fa-trash-o"
        aria-hidden="true"
        onClick={() => onDelete(_id)}
      ></i>
      <p>{title}</p>
      <p>{dateString}/</p>
      <p>{action}</p>
      <p>{periodicity}/</p>  
    </div>
  );
};