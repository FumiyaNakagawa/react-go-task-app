import React, { FC } from "react";
import TaskListItem from "../containers/TaskListItem";
import { Todo } from "../reducers/todos";
import AddTodo from "../containers/AddTodo";
import Grid from "@material-ui/core/Grid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

interface TaskListProps {
  tasks: Todo[];
}

const TaskList: FC<TaskListProps> = ({ tasks }) => {
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid item xs={4}>
        <Grid item xs={12}>
          <AddTodo />
        </Grid>
        <Grid item xs={12}>
          <Droppable droppableId="backlog">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {tasks.map((task: Todo, index: number) => {
                  return (
                    <TaskListItem key={task.id} task={task} index={index} />
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        {tasks.map((task: Todo) => {
          if (task.status === "inprogress") {
            // return <TaskListItem key={task.id} task={task} />;
          }
          return false;
        })}
      </Grid>
      <Grid item xs={4}>
        {tasks.map((task: Todo) => {
          if (task.status === "done") {
            // return <TaskListItem key={task.id} task={task} />;
          }
          return false;
        })}
      </Grid>
    </DragDropContext>
  );
};

export default TaskList;
