import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Todo } from "../reducers/todos";
import { TextField, Button } from "@material-ui/core";

export interface TaskNewProps {
  TaskNew?: (task: Todo) => void;
}

const AddTodo: FC<TaskNewProps> = ({ TaskNew = () => undefined }) => {
  const { register, handleSubmit } = useForm<Todo>();
  const onSubmit = handleSubmit(({ title, text }) => {
    console.log(title, text);

    const task = {
      title,
      text,
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

      <Button type="submit" variant="contained" color="secondary">
        追加する
      </Button>
    </form>
  );
};

export default AddTodo;
