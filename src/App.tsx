import React, { useState } from "react";
import TaskForm from "./components/taskform/TaskForm";
import TaskList from "./components/tasklist/TaskList";
import { TaskType } from "./interface/task";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { name: "test", completed: false },
  ]);

  // const handleComplete = () => {
  //   // setTasks(updatedTasks);
  // };

  const handleAddTask = (name: string) => {
    const newTask = { name, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <TaskForm handleAddTask={handleAddTask} />
      <TaskList />
    </>
  );
}

export default App;
