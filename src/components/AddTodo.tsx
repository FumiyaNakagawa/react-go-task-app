import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Todo } from "../reducers/todos";
import { TextField, Button } from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface TaskNewProps {
  TaskNew?: (task: Todo) => void;
}

const AddTodo: FC<TaskNewProps> = ({ TaskNew = () => undefined }) => {
  const { register, handleSubmit } = useForm<Todo>();

  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = handleSubmit(({ title, text }) => {
    console.log(title, text);

    const task = {
      title,
      text,
      date: startDate,
      status: 'backlog',
    };

    TaskNew(task);
  });

  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="outlined-basic"
        label="タイトルを入力"
        variant="outlined"
        name="title"
        defaultValue="test"
        inputRef={register}
      />
      <TextField name="text" inputRef={register({ required: true })} />

      <DatePicker
        selected={startDate}
        onChange={(date: Date) => {
          setStartDate(date);
        }}
      />

      <Button type="submit" variant="contained" color="secondary">
        追加する
      </Button>
    </form>
  );
};

export default AddTodo;
