import React, { useState } from "react";
import TaskForm from "./components/taskform/TaskForm";
import TaskList from "./components/tasklist/TaskList";
import { TaskType } from "./interface/interface";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { name: "test", completed: false },
  ]);

  const handleComplete = (index: number) => {
    const tasksTemp = [...tasks];
    tasksTemp[index] = {
      ...tasksTemp[index],
      completed: !tasksTemp[index].completed,
    };
    setTasks(tasksTemp);
  };
  const handleDelete = (index: number) => {
    const tasksTemp = [...tasks];
    tasksTemp.splice(index, 1);
    setTasks(tasksTemp);
  };

  const handleAddTask = (name: string) => {
    const newTask = { name, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <TaskForm handleAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
