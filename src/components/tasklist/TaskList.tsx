import TaskItem from "../taskitem/TaskItem";
import { TaskListProps } from "../../interface/interface";
import { Container } from "./style";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  handleComplete,
  handleDelete,
}) => {
  return (
    <Container>
      {tasks.map((task, idx) => {
        return (
          <TaskItem
            task={task}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            index={idx}
            key={idx}
          />
        );
      })}
    </Container>
  );
};

export default TaskList;
