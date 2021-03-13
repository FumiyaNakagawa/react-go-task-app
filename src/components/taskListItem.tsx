import React, { FC, useState } from "react";
import { Todo } from "../reducers/todos";
import EditTask from "../containers/TaskEdit";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Modal,
} from "@material-ui/core";

import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

interface TaskItemProps {
  task: Todo;
  index: number;
  TaskDelete: (task: Todo) => void;
}

const TaskListItem: FC<TaskItemProps> = ({
  task,
  index,
  TaskDelete = () => undefined,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const modalOpen = () => {
    setOpen(true);
  };

  const modalClose = () => {
    setOpen(false);
  };

  const deleteTask = () => {
    TaskDelete(task);
    menuClose();
  };

  const menuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
      {(provided) => (
        <StyledCard
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <CardHeader
            action={
              <IconButton aria-label="settings" onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
            }
            title={task.title}
            subheader={"期日: " + task.date?.toLocaleDateString()}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {task.text}
            </Typography>
          </CardContent>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={menuClose}
          >
            <MenuItem onClick={modalOpen}>編集</MenuItem>
            <MenuItem onClick={deleteTask}>削除</MenuItem>
          </Menu>
          <Modal
            open={open}
            onClose={modalClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <EditTask task={task} />
          </Modal>
        </StyledCard>
      )}
    </Draggable>
  );
};

const StyledCard = styled(Card)`
  margin: 10px;
`;

export default TaskListItem;
