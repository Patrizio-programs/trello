import React from "react";
import Task from "../Task";

function TaskList({ title, tasks }) {
  return (
    <div className="task">
      <h3>{title}</h3>

      <div className="dropzone">
        {tasks.map((task) => {
          return <Task key={task} task={task} />;
        })}{" "}
      </div>
    </div>
  );
}

export default TaskList;
