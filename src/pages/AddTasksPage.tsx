import { useState } from "react";
import { ITask } from "../util/Interfaces";
import { SendData } from "../util/FetchData";

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
          <button onClick={(e)=>{handleSubmit(e); window.location.reload();}}>ADD</button>
          <button type="reset">CANCEL</button>
        </div>
      </form>
    </div>
  );
};
