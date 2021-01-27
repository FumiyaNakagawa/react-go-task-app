import React, { FC } from "react";

export interface TaskItem {
  id: number;
  text: string;
}

interface TaskItemProps {
  taskItems: TaskItem[];
}

const TaskListItem: FC<TaskItemProps> = ({ taskItems }) => (
  <div>
    {taskItems.map((c) => (
      <div key={c.id}>
        <p>{c.text}</p>
      </div>
    ))}
  </div>
);

export default TaskListItem;
