import { connect } from "react-redux";
import { Dispatch } from "redux";
import TaskList from "../components/TaskList";
import { rootState } from "../reducers/index";
import { DragIds, dragTask } from "../actions";

interface DispatchProps {
  dragTask: (dragIds: DragIds) => void;
}

const mapStateToProps = (state: rootState) => ({
  tasks: state.todoReducer.task,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  dragTask: (dragIds) => dispatch(dragTask(dragIds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
