import { TaskListProps } from "../../interface/interface";
import TaskItem from "../taskitem/TaskItem";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  handleComplete,
  handleDelete,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default TaskList;
