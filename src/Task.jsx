import { v4 as uuidv4 } from "uuid";

function Task({ task }) {
  const script = document.createElement("script");

  script.src = "./components/script.js";
  script.async = true;

  document.body.appendChild(script);

  return (
    <div>
      <div className="taskname" id={uuidv4()} draggable="true">
        <div>{task}</div>
      </div>
    </div>
  );
}

export default Task;
