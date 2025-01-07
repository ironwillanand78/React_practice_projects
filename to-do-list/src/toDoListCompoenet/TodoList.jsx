import { useState } from 'react';
import styles from './todolist.module.css'


const Todolist = () =>{
    let[task , setTask] = useState('');
    let[todolist , setTodolist] = useState([]);
    const newTask = (e) =>{
        setTask(e.target.value)
    }
    const addTask = (task) =>{
        if(task.trim() === "")return
        let newTask = {id : Date.now(),
                        taskName : task ,
                        checked : false
        }
           setTodolist([...todolist , newTask]);
               setTask('');
    }
    
    const taskCompleted = (id) =>{
        const indexToCheck = todolist.findIndex((todoObj) => todoObj.id === id)
        let copyTodo = [...todolist];
        copyTodo.splice(indexToCheck , 1 , {
                ...todolist[indexToCheck] , 
                checked :true
        })
        setTodolist(copyTodo);
    } 
    const clearLog = (id) =>{
        const updateTaskLog = todolist.filter((todoObj) => todoObj.id !== id);
        setTodolist(updateTaskLog);
    }
    return(<>
        <div className={styles.container}>
            <div className={styles.inputdiv}>
                <input type="text" placeholder='Add Tasks..' onChange={newTask} value={task}/>
                <button className={styles.addbtn} onClick={() =>{
                    addTask(task)
                }}>Add Task</button>
            </div>
        </div>
        <div className={styles.todolistcontainer}>
            <ul>
                {todolist.map((taskObj , index)=>(
                    <li key={index}>
                        <span style={{textDecoration : taskObj.checked ? "line-through" : "none",}}><input type="checkbox" onClick={()=>{
                            taskCompleted(taskObj.id);
                        }}/>{" "}{taskObj.taskName}</span> {" "}
                        <span><button className={styles.decbtn} onClick={() =>{
                            clearLog(taskObj.id)
                        }}>Delete Task</button></span>
                    </li>
                ))}
            </ul>
        </div>
    </>)
}
export default Todolist;