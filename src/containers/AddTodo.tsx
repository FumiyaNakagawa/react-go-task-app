import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import AddTodo from '../components/AddTodo'
import { addTodo } from '../actions'



// interface StateProps {
  
// }

interface DispatchProps {
  TaskNew: (text: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  TaskNew: (text) => dispatch(addTodo(text))
})


export default connect(null, mapDispatchToProps)(AddTodo)