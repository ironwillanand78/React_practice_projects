
import styles from './App.module.css'
import QuoteGenerator from './component/quote-generator';

const App = () =>{
 return (<>

    <div className={styles.container}>
      <QuoteGenerator/>
    </div>
 
 
 </>
 )
}

export default App;