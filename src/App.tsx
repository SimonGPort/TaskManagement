import React, { useState, useEffect } from "react";
import TaskForm from "./components/taskform/TaskForm";
import TaskList from "./components/tasklist/TaskList";
import { TaskType } from "./interface/interface";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);

  useEffect(() => {
    if (loadingData) {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
      setLoadingData(false);
    } else {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, loadingData]);

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
      <h1 className="header">Task Management Application</h1>
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
