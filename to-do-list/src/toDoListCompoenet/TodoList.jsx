import { useState } from 'react';
import styles from './todolist.module.css'

const TodoList = () =>{

    let[task ,setTask] = useState("");
    const getTask = (e) =>{
        setTask(e.target.value);
    }
    let[todolist , setTodolist] = useState([]);
    const addTask = (task) =>{
        let newtask = {
            id : Date.now() ,
            taskName : task ,
            check : false
        }
        setTodolist([...todolist , newtask]);
        setTask("");
    }


    const taskCompleted = (id) =>{
        let indexUpdate = todolist.findIndex((todoObj) => todoObj.id === id);
        let copyTodo = [...todolist];
        copyTodo.splice(indexUpdate , 1 , {
            ...todolist[indexUpdate],
             check : true
        })
        setTodolist(copyTodo);
    }
    
    const removeTask = (id) => {
        let updatedTodo = todolist.filter((todoObj) => todoObj.id !== id);
        setTodolist(updatedTodo);
    }



    return  (
        <>
            <div className={styles.container}>
                <div className={styles.inputdiv}>
                    <input type="text" placeholder='Add task..' onChange={getTask} value={task}/>
                    <button className={styles.addbtn} onClick={() =>{
                        addTask(task);
                    }}>Add Task</button>
                </div>
            </div>
            <div className={styles.todolistcontainer}>
                <ul>
                    {
                        todolist.map((todoObj , index) =>(
                            <li key={index}>
                                <span style={{
                                    textDecoration : todoObj.check ? "line-through" : "none"
                                }}>
                                <input type="checkbox" onClick={() =>{
                                    taskCompleted(todoObj.id)
                                }} />{" "}
                                {todoObj.taskName}
                                </span>
                                <span> <button className={styles.decbtn} onClick={() =>{
                                    removeTask(todoObj.id)
                                }}> Task Completed</button></span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
};
export default TodoList;