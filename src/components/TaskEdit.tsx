import React, { FC, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Todo } from "../reducers/todos";
import { TextField, Button, Grid } from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

interface TaskItemProps {
  task: Todo;
  TaskEdit: (task: Todo) => void;
}

const EditTask: FC<TaskItemProps> = ({ task, TaskEdit = () => undefined }) => {
  const { register, handleSubmit } = useForm<Todo>();
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const onSubmit = handleSubmit(({ title, text }) => {
    const editTask = {
      id: task.id,
      title,
      text,
      date: startDate,
      status: task.status,
      sortIndex: task.sortIndex,
    };

    TaskEdit(editTask);
  });

  return (
    <StyledModal>
      <form onSubmit={onSubmit}>
        <StyleGrid item xs={12}>
          <StyledTextField
            label="title"
            variant="outlined"
            name="title"
            defaultValue={task.title}
            inputRef={register({ required: true })}
          />
          <StyledTextField
            label="description"
            variant="outlined"
            name="text"
            defaultValue={task.text}
            inputRef={register({ required: true })}
          />

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
          <StyledButton type="submit" variant="contained" color="secondary">
            編集する
          </StyledButton>
        </StyleGrid>
      </form>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 450px;
  background-color: #fff;
  border-radius: 5px;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 10px;
`;

const StyledDatePicker = styled(KeyboardDatePicker)`
  width: 100%;
  margin-bottom: 10px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 10px;
`;

const StyleGrid = styled(Grid)`
  padding: 20px;
`;

export default EditTask;
