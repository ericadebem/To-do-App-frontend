import { useState, useEffect } from "react";
import { FetchData } from "../util/FetchData";

export const TasksPage = () => {
  return (
    <div>
      <h1>TODO APP</h1>
      <form>
        <input type="text" placeholder="NEW TASK" name="newTask" id="newTask" />
        <input type="number" placeholder="DATE" name="date" id="date" />
        <input type="text" placeholder="ACTION" name="action" id="action" />
        <input type="number" placeholder="PERIODICITY" name="periodicity" id="periodicity" />

       <button>ADD</button>
       <button>CANCEL</button>
      </form>
    </div>
  );
};
