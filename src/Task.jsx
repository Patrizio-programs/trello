function Task({ task }) {
  return (
    <div>
      <div className="taskname" draggable="true">
        {task}
      </div>
    </div>
  );
}

export default Task;
