interface ITask {
  title: string;
  date: string;
  action: string;
  periodicity: number;
}

interface ITaskProps {
  task: ITask;
  onAdd: () => void;
  onCancel: () => void;
}

export const TaskModal = ({ task, onAdd, onCancel }: ITaskProps) => {
  const { title, date, action, periodicity } = task;
  const dateString = new Date(date).toLocaleDateString();
  return (
    <div>
      <p>{title}</p>
      <p>{dateString}</p>
      <p>{action}</p>
      <p>{periodicity}</p>
      <button onClick={onAdd}>ADD</button>
      <button onClick={onCancel}>CANCEL</button>
    </div>
  );
};