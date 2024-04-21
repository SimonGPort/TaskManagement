import React, { useState } from "react";
import { TaskFormProps } from "../../interface/taskFormProps";

const TaskForm: React.FC<TaskFormProps> = ({ handleAddTask }) => {
  const [name, setName] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() !== "") {
      handleAddTask(name);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
