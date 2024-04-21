import { TaskListProps } from "../../interface/interface";

const TaskList: React.FC<TaskListProps> = ({ tasks, handleComplete }) => {
  return (
    <div>
      {tasks.map((task) => {
        return <div>{task.name}</div>;
      })}
    </div>
  );
};

export default TaskList;
