export interface TaskType {
  name: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: TaskType[];
  handleComplete: (index: number) => void;
  handleDelete: (index: number) => void;
}

export interface TaskItemProps {
  task: TaskType;
  handleComplete: (index: number) => void;
  handleDelete: (index: number) => void;
  index: number;
}

export interface TaskFormProps {
  handleAddTask: (name: string) => void;
}
