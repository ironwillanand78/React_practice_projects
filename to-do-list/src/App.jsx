import styles from './App.module.css'
import Todolist from './toDoListCompoenet/TodoList';
const App = () =>{
  return (
    <>
    <div className={styles.container}>
    <Todolist/>
    </div>
    </>
  )
}
export default App;