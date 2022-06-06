import React, { useEffect } from "react";
import "./Main.css";
import { useState, useRef } from "react";
import TaskList from "./TaskList";
import { Modal, Button, Group } from "@mantine/core";
import Canvas from "./Canvas";

function Main() {
  if (document.querySelector(".dropzone")) {
    const area = document.querySelectorAll(".dropzone");
    const item = document.querySelectorAll(".taskname");

    const dragstart = (e) => {
      setTimeout(() => e.target.classList.add("hide"), 0);
    };

    const dragend = (e) => {
      e.target.classList.remove("hide");
    };

    const dragover = (e) => {
      e.preventDefault();
    };

    const dragenter = (e) => {
      e.target.classList.add("hovered");
    };

    const dragleave = (e) => {
      e.target.classList.remove("hovered");
    };

    const drop = (e) => {
      e.target.classList.remove("hovered");
      e.target.append(item);
    };

    

    area.forEach((a) => {
      a.addEventListener("dragover", dragover);
      a.addEventListener("dragenter", dragenter);
      a.addEventListener("dragleave", dragleave);
      a.addEventListener("drop", drop);
    });
    if (item === null) {
      console.log("empty");
    } else {
      item.addEventListener("dragend", dragend);

      item.addEventListener("dragstart", dragstart);
    }
  }

  const [tasks, setTasks] = useState([]);
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
