import React, { FC, useState } from "react";
import TaskListItem from "../containers/TaskListItem";
import { TaskListObject, TaskListKey } from "../reducers/todos";
import { Grid, IconButton } from "@material-ui/core";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { DragIds } from "../actions";
import AddTodo from "../containers/AddTodo";
import styled from "styled-components";
import AddCircleIcon from "@material-ui/icons/AddCircle";

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
        let backlog = status === "backlog";
        return (
          <Grid item xs={4}>
            <Grid item xs={12}>
              <Droppable droppableId={status}>
                {(provided) => (
                  <StyledTaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    <Grid item xs={12}>
                      <TaskCount>
                        <span>{tasks[status].length}</span>
                        {status}
                      </TaskCount>
                      {backlog && <StyledAddTodo />}
                    </Grid>

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

const AddTodoComponent: FC<{}> = () => {
  const [open, setOpen] = useState(false);

  const addTodo = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <IconButton aria-label="delete" onClick={addTodo}>
        <AddCircleIcon />
      </IconButton>
      {open && <AddTodo />}
    </>
  );
};

const StyledTaskList = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  height: 80vh;
  overflow: scroll;
`;

const TaskCount = styled.p`
  span {
    margin: 10px;
    padding: 5px 8px;
    background: #cccccc;
    border-radius: 50%;
  }
`;

const StyledAddTodo = styled(AddTodoComponent)`
  display: inline-block;
`;

export default TaskList;
