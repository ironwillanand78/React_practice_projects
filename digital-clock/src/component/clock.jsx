 import { useState } from "react";
import styles from "./clock.module.css";
import { useEffect } from "react";
 const Clock = () =>{

    const [time , setTime] = useState( new Date());

    useEffect(() =>{
        const timeId = setInterval(()=>{
            setTime(new Date())
        } , 1000)

        // return () => clearInterval(timeId)  
           } , []);
 return(
    <>
    <div className={styles.clockdiv}>
        <h1>{time.toLocaleTimeString()}</h1>
    </div>
    </>
 )
 }
 export default Clock;