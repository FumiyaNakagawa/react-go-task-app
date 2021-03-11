import { connect } from "react-redux";
import TaskList from "../components/TaskList";
import { rootState } from "../reducers/index";

const mapStateToProps = (state: rootState) => ({
  tasks: state.todoReducer.task,
});

export default connect(mapStateToProps)(TaskList);
