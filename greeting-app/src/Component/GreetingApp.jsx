import { useState } from 'react'
import styles from './greeting.module.css'

const Greeting = () =>{
    let[name , setName] = useState("");
    let[greet , setGreet] = useState("");
    let[error , setError] = useState("");

    const getName = (e) =>{
        setName(e.target.value);
    }
    const greetUser = () =>{
        if(name.trim() === ("")){
            setError("Enter a valid Name.")
            setName("");
        } else{
            setGreet(`Hello , ${name}`);
            setName("");
        }
    }
    
    return <>
    <div className={styles.greet}>
        <div className={styles.inputdiv}>
            <input type="text" placeholder='Enter Name' onChange={getName} value={name}/>
            <button className= {styles.btn} onClick={greetUser}>Greet Me</button>
        </div>
        {greet && <h2>{greet}</h2>}
        {error && <p style={{color: "red" , fontSize : "28px"}}>{error}</p>}
    </div>
    </>
}
export default Greeting;