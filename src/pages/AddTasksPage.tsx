import { useState } from "react";
import axios, { AxiosError } from "axios";

interface ITask {
  title: string;
  date: string;
  action: string;
  periodicity: number;
}

export const SendData = async (endpoint: string, data: ITask) => {
  try {
    await axios.post(`http://localhost:6060/app/${endpoint}`, data);
  } catch (error: AxiosError) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const AddTasksPage = () => {
  const [formData, setFormData] = useState<ITask>({
    title: "",
    date: "",
    action: "",
    periodicity: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await SendData("task", formData);
  };

  const handleReset = () => {
    setFormData({
      title: "",
      date: "",
      action: "",
      periodicity: 0,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <input
          type="text"
          placeholder="NEW TASK"
          name="newTask"
          id="newTask"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="date"
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
        <div className="button">
        <button type="submit">ADD</button>
        <button type="reset">CANCEL</button>
        </div>
      </form>
    </div>
  );
};
