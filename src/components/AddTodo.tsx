import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Todo } from "../reducers/todos";
import { TextField, Button } from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuid } from "uuid";
import Grid from "@material-ui/core/Grid";

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
    <Grid item xs={12}>
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
    </Grid>
  );
};

export default AddTodo;
