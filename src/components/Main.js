import React, { useEffect } from "react";
import "./Main.css";
import { useState, useRef } from "react";
import TaskList from "./TaskList";
import { Modal, Button, Group } from "@mantine/core";
import Canvas from "./Canvas";

function Main() {
  const [tasks, setTasks] = useState(["Your Task here"]);
  const todoref = useRef();

  useEffect(() => {
    const Storage = JSON.parse(localStorage.getItem("tasks"));
    if (Storage) setTasks(Storage);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(e) {
    e.preventDefault();
    const info = todoref.current.value;
    setTasks([...tasks, info]);
    if (info === "") return;
    console.log(info);

    todoref.current.value = null;
  }

  function AddTask() {
    const [opened, setOpened] = useState(false);

    return (
      <>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Enter a new task"
        >
          {
            <form>
              <textarea ref={todoref}></textarea>
              <button onClick={handleAddTask}>Submit</button>
            </form>
          }
        </Modal>

        <Group position="center">
          <Button onClick={() => setOpened(true)}>Add New Task</Button>
        </Group>
      </>
    );
  }

  return (
    <div className="main">
      <div className="main-tasks">
        <TaskList title="To Do" tasks={tasks} />
        <Canvas title="Doing" />
        <Canvas title="Done" />
      </div>

      <div className="main-add">
        <AddTask />
      </div>
    </div>
  );
}

export default Main;
