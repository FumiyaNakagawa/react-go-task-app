import React, { FC } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export interface TaskNewProps {
  TaskNew?: (text: string) => void;
}

const AddTodo: FC<TaskNewProps> = ({
  TaskNew = () => undefined,
}) => {
  let input: HTMLInputElement;

  return (
    <div>
      <form action=""
        onSubmit={e => {
          e.preventDefault()
          TaskNew(input.value)
          input.value = ""
        }}
      >
        <TextField
          inputRef={node => (input = node)}
          id="outlined-basic"
          label="タスクを入力"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="secondary">追加する</Button>
      </form>
    </div>
  );
}

export default AddTodo;