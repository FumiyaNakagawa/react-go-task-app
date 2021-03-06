import { connect } from "react-redux";
import { Dispatch } from "redux";
import AddTodo from "../components/AddTodo";
import { addTodo } from "../actions";
import { Todo } from "../reducers/todos";

// interface StateProps {

// }

interface DispatchProps {
  TaskNew: (task: Todo) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  TaskNew: (task) => dispatch(addTodo(task)),
});

export default connect(null, mapDispatchToProps)(AddTodo);
