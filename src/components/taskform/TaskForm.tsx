import React, { useState } from "react";
import { TaskFormProps } from "../../interface/interface";
import { Form, Input, Button } from "./style";

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
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add new task..."
      />
      <Button type="submit">Add Task</Button>
    </Form>
  );
};

export default TaskForm;
