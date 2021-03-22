import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Todo } from "../reducers/todos";
import { TextField, Button } from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuid } from "uuid";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

export interface TaskNewProps {
  taskList: any;
  TaskNew?: (task: Todo) => void;
}

const AddTodo: FC<TaskNewProps> = ({ taskList, TaskNew = () => undefined }) => {
  const { register, handleSubmit } = useForm<Todo>();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = handleSubmit(({ title, text }) => {
    const task = {
      id: uuid(),
      title,
      text,
      date: startDate,
      status: "backlog",
      sortIndex: taskList.backlog.length,
    };

    TaskNew(task);
  });

  return (
    <StyleGrid item xs={12}>
      <form onSubmit={onSubmit}>
        <Grid item xs={12}>
          <StyledTextField
            label="title"
            variant="outlined"
            name="title"
            inputRef={register({ required: true })}
          />
          <StyledTextField
            label="description"
            variant="outlined"
            name="text"
            inputRef={register({ required: true })}
          />
        </Grid>

        <StyledDatePicker item xs={12}>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => {
              setStartDate(date);
            }}
          />
        </StyledDatePicker>
        <Grid item xs={12}>
          <StyledButton type="submit" variant="contained" color="secondary">
            追加する
          </StyledButton>
        </Grid>
      </form>
    </StyleGrid>
  );
};

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 5px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 5px;
`;

const StyledDatePicker = styled(Grid)`
  margin-bottom: 5px;
  .react-datepicker-wrapper {
    width: 100%;
  }
  input {
    width: 100%;
    padding: 18.5px 14px;
  }
`;

const StyleGrid = styled(Grid)`
  padding: 15px;
`;

export default AddTodo;
