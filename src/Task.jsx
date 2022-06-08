import { v4 as uuidv4 } from "uuid";

function Task({ task }) {
  return (
    <div>
      <div className="taskname" id={uuidv4()} draggable="true">
        <div>{task}</div>
      </div>
    </div>
  );
}

export default Task;
