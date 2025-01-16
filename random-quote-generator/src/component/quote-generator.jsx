import { useEffect, useState } from 'react'
import styles from './card.module.css'
import quoteData from '../component/data/Data'


const QuoteGenerator = () =>{
        let[quote , setQuote] = useState({});

        // Function Handling the generation of quotes

        const generateQuote = (quoteData) =>{
            let quoteIndex = Math.floor(Math.random() * quoteData.length);

            // console.log(quoteIndex);
            setQuote(quoteData[quoteIndex]);
        }
        // console.log(quote);

        // useEffect is used to avoid initial emptyness of quote generator div
        useEffect(()=>{
            generateQuote(quoteData);
        } , [])
    return (
        <>
        
        <div className={styles.container}>
                <h1>Generate Quote</h1>
                <h2>{quote.quote}</h2>
                <em>{quote.author}</em>
              <button className={styles.quotebtn} onClick={()=>{generateQuote(quoteData)}}>
                   Generate Quote
               </button>
        </div>
        </>
    )
}
export default QuoteGenerator;