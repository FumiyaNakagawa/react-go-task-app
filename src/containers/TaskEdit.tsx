import { connect } from "react-redux";
import { Dispatch } from "redux";
import TaskEdit from "../components/TaskEdit";
import { editTodo } from "../actions";
import { Todo } from "../reducers/todos";

interface DispatchProps {
  TaskEdit: (task: Todo) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  TaskEdit: (task) => dispatch(editTodo(task)),
});

export default connect(null, mapDispatchToProps)(TaskEdit);
