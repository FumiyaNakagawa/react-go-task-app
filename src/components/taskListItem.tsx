import React, { FC, useState } from "react";
import { Todo } from "../reducers/todos";
import EditTask from "./EditTask";
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

interface TaskItemProps {
  task: Todo;
  TaskDelete: (task: Todo) => void;
}

const TaskListItem: FC<TaskItemProps> = ({
  task,
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
    <div>
      <StyledCard key={task.id}>
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
          <EditTask />
        </Modal>
      </StyledCard>
    </div>
  );
};

const StyledCard = styled(Card)`
  margin: 10px;
`;

export default TaskListItem;
