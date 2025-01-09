import styles from './App.module.css'
import Greeting from './Component/GreetingApp';

const  App = ()=>{
  return(
  
     <div className={styles.container}>
        <Greeting/>
      </div>
  )
};
export default App;