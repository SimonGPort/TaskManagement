import { DeleteIcon, CompletedIcon, NotCompletedIcon } from "../../icons/icons";
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
      <button onClick={() => handleComplete(index)}>
        {task.completed ? <CompletedIcon /> : <NotCompletedIcon />}
      </button>
      <div>{getStatusLabel(task.completed)}</div>
      <button onClick={() => handleDelete(index)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default TaskItem;
