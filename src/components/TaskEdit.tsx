import React, { FC, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Todo } from "../reducers/todos";
import { TextField, Button } from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TaskItemProps {
  task: Todo;
  TaskEdit: (task: Todo) => void;
}

const EditTask: FC<TaskItemProps> = ({ task, TaskEdit = () => undefined }) => {
  const { register, handleSubmit } = useForm<Todo>();
  const [startDate, setStartDate] = useState(new Date());

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
        <TextField
          id="outlined-basic"
          label="タイトルを入力"
          variant="outlined"
          name="title"
          defaultValue={task.title}
          inputRef={register}
        />
        <TextField
          name="text"
          defaultValue={task.text}
          inputRef={register({ required: true })}
        />

        <DatePicker
          selected={task.date}
          onChange={(date: Date) => {
            setStartDate(date);
          }}
        />

        <Button type="submit" variant="contained" color="secondary">
          編集する
        </Button>
      </form>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 360px;
  background-color: #fff;
  border-radius: 3px;
`;

export default EditTask;
