export interface TaskType {
  name: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: TaskType[];
  handleComplete: (index: number) => void;
}

export interface TaskFormProps {
  handleAddTask: (name: string) => void;
}
