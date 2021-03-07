import { connect } from "react-redux";
import { Dispatch } from "redux";
import TaskListItem from "../components/TaskListItem";
import { deleteTodo } from "../actions";
import { Todo } from "../reducers/todos";

interface DispatchProps {
  TaskDelete: (task: Todo) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  TaskDelete: (task) => dispatch(deleteTodo(task)),
});

export default connect(null, mapDispatchToProps)(TaskListItem);
