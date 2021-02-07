import React, { FC } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";

export interface TaskItem {
  id: number;
  text: string;
}

interface TaskItemProps {
  taskItems: TaskItem[];
}

const TaskListItem: FC<TaskItemProps> = ({ taskItems }) => {
  return (
    <div>
      {taskItems.map((c) => (
        <StyledCard key={c.id}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="title"
            subheader="February 2, 2021"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {c.text}
            </Typography>
          </CardContent>
        </StyledCard>
      ))}
    </div>
  );
};

const StyledCard = styled(Card)`
  margin: 10px;
`;

export default TaskListItem;
