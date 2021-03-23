import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Todo } from "../reducers/todos";
import { TextField, Button } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export interface TaskNewProps {
  taskList: any;
  TaskNew?: (task: Todo) => void;
}

const AddTodo: FC<TaskNewProps> = ({ taskList, TaskNew = () => undefined }) => {
  const { register, handleSubmit } = useForm<Todo>();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
  };

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

        <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <StyledDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={startDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </Grid>
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

const StyledDatePicker = styled(KeyboardDatePicker)`
  width: 100%;
`;

const StyleGrid = styled(Grid)`
  padding: 15px;
`;

export default AddTodo;
