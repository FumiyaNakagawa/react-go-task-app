import React, { FC } from "react";
import TaskListItem from "../containers/TaskListItem";
import { TaskListObject, TaskListKey } from "../reducers/todos";
import Grid from "@material-ui/core/Grid";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { DragIds } from "../actions";
import styled from "styled-components";

interface TaskListProps {
  tasks: TaskListObject;
  dragTask?: (dragIds: DragIds) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, dragTask = () => undefined }) => {
  const taskListKeys = Object.keys(tasks);
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
      {taskListKeys.map((val) => {
        let status = val as TaskListKey;
        return (
          <Grid item xs={4}>
            <Grid item xs={12}>
              <p>{status}</p>
            </Grid>
            <Grid item xs={12}>
              <Droppable droppableId={status}>
                {(provided) => (
                  <StyledTaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {tasks[status].map((task) => {
                      return (
                        <TaskListItem
                          key={task.id}
                          task={task}
                          index={task.sortIndex}
                        />
                      );
                    })}
                    {provided.placeholder}
                  </StyledTaskList>
                )}
              </Droppable>
            </Grid>
          </Grid>
        );
      })}
    </DragDropContext>
  );
};

const StyledTaskList = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  height: 70vh;
  overflow: scroll;
`;

export default TaskList;
