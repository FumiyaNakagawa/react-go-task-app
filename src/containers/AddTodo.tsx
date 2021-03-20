import { connect } from "react-redux";
import { Dispatch } from "redux";
import AddTodo from "../components/AddTodo";
import { addTodo } from "../actions";
import { Todo } from "../reducers/todos";
import { rootState } from "../reducers/index";

interface DispatchProps {
  TaskNew: (task: Todo) => void;
}

const mapStateToProps = (state: rootState) => ({
  taskList: {
    backlog: state.todoReducer.taskList.backlog,
    inprogress: state.todoReducer.taskList.inprogress,
    done: state.todoReducer.taskList.done,
  },
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  TaskNew: (task) => dispatch(addTodo(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
