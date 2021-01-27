import { connect } from "react-redux";
import TaskList from "../components/TaskList";
import { rootState } from "../reducers/index";


const mapStateToProps = (state: rootState) => ({
  status: state.todoReducer.status,
  tasks: state.todoReducer.tasks,
})

export default connect(mapStateToProps)(TaskList);
