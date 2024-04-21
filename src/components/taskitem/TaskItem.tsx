import { TaskItemProps } from "../../interface/interface";

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  handleComplete,
  handleDelete,
  index,
}) => {
  const getStatusLabel = (status: boolean) => {
    return status ? "Completed." : "Not Completed.";
  };

  return (
    <div>
      <div>{task.name}</div>
      <div>{getStatusLabel(task.completed)}</div>
      <button onClick={() => handleComplete(index)} />
      <button onClick={() => handleDelete(index)} />
    </div>
  );
};

export default TaskItem;
