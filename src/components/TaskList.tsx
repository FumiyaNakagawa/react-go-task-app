import React, { FC } from "react";
import TaskListItem from "../containers/TaskListItem";
import { Todo } from "../reducers/todos";
import AddTodo from "../containers/AddTodo";
import Grid from "@material-ui/core/Grid";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { DragIds } from "../actions";
import styled from "styled-components";

interface TaskListProps {
  tasks: Todo[];
  dragTask?: (dragIds: DragIds) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, dragTask = () => undefined }) => {
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    const dragIds = {
      droppableIdStart: source.droppableId,
      droppableIdEnd: destination.droppableId,
      droppableIndexStart: source.index,
      droppableIndexEnd: destination.index,
      draggableId: draggableId,
    };
    dragTask(dragIds);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid item xs={4}>
        <Grid item xs={12}>
          <AddTodo />
        </Grid>
        <Grid item xs={12}>
          <Droppable droppableId="backlog">
            {(provided) => (
              <StyledTaskList ref={provided.innerRef} {...provided.droppableProps}>
                {tasks.map((task: Todo, index: number) => {
                  if (task.status === "backlog") {
                    return (
                      <TaskListItem key={task.id} task={task} index={index} />
                    );
                  } else {
                    return false;
                  }
                })}
                {provided.placeholder}
              </StyledTaskList>
            )}
          </Droppable>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Droppable droppableId="inprogress">
          {(provided) => (
            <StyledTaskList ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task: Todo, index: number) => {
                if (task.status === "inprogress") {
                  return (
                    <TaskListItem key={task.id} task={task} index={index} />
                  );
                } else {
                  return false;
                }
              })}
              {provided.placeholder}
            </StyledTaskList>
          )}
        </Droppable>
      </Grid>
      <Grid item xs={4}>
        <Droppable droppableId="done">
          {(provided) => (
            <StyledTaskList ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task: Todo, index: number) => {
                if (task.status === "done") {
                  return (
                    <TaskListItem key={task.id} task={task} index={index} />
                  );
                } else {
                  return false;
                }
              })}
              {provided.placeholder}
            </StyledTaskList>
          )}
        </Droppable>
      </Grid>
    </DragDropContext>
  );
};

const StyledTaskList = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  height: 70vh;
`;

export default TaskList;
