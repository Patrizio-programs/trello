function Task({ task }) {
  return (
    <div className="taskname" draggable="true">
      {task}
    </div>
  );
}

export default Task;
