import React, { FC, useState } from "react";
import { Todo } from "../reducers/todos";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";

import styled from "styled-components";

interface TaskItemProps {
  taskItems: Todo;
}

const TaskListItem: FC<TaskItemProps> = ({ taskItems }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledCard key={taskItems.id}>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          }
          title={taskItems.title}
          subheader={"期日: " + taskItems.date?.toLocaleDateString()}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {taskItems.text}
          </Typography>
        </CardContent>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>編集</MenuItem>
          <MenuItem onClick={handleClose}>削除</MenuItem>
        </Menu>
      </StyledCard>
    </div>
  );
};

const StyledCard = styled(Card)`
  margin: 10px;
`;

export default TaskListItem;
