import { DeleteIcon, CompletedIcon, NotCompletedIcon } from "../../icons/icons";
import { TaskItemProps } from "../../interface/interface";
import { Container, ButtonSection, Button } from "./style";

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
    <Container completed={task.completed}>
      <div>• {task.name}</div>
      <ButtonSection>
        <div>{getStatusLabel(task.completed)}</div>
        <Button onClick={() => handleComplete(index)}>
          {task.completed ? <CompletedIcon /> : <NotCompletedIcon />}
        </Button>

        <Button onClick={() => handleDelete(index)}>
          <DeleteIcon />
        </Button>
      </ButtonSection>
    </Container>
  );
};

export default TaskItem;
