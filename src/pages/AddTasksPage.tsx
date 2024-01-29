import { useState } from "react";
import axios from "axios";
import { ITask } from "../util/Interfaces";

export const AddTasksPage = () => {
  const [formData, setFormData] = useState<ITask>({
    title: "",
    date: "",
    action: "",
    periodicity: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    await SendData("task", formData);
  };
  const SendData = async (endpoint: string, data: ITask) => {
    try {
      await axios.post(`http://localhost:10000/app/${endpoint}`, data);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
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
      <form onReset={handleReset}>
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
            setFormData({ ...formData, date: JSON.stringify(e.target.value) })
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
        <div className="button-container">
          <button onClick={handleSubmit}>ADD</button>
          <button type="reset">CANCEL</button>
        </div>
      </form>
    </div>
  );
};
