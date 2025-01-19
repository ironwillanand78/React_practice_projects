import { useState  } from 'react';
import axios from 'axios';
import styles from './scroll.module.css';


const FetchImage = () =>{

    // getting user input 

    const[input , setInput] = useState("");
    const[image , setImage] = useState([]);
    const[error , setError]= useState("");
        const getInput = (e) =>{
        setInput(e.target.value);
        if (error) {
            setError("");
        }
    }
    // console.log(input);

    const getImage = async () =>{
        if(!input.trim()){
            setError("Enter a valid image")
            setInput("");
            return;
        }
        try{
            const arrayImage = await axios.get("https://api.unsplash.com/search/photos/?client_id=cN6JLczc5oj5XSNx8ngEyNVjQRzs5Lhc3UoMK2Ik7wE" , {
                params : { query: input , per_page : 15 },
            })
            setImage(arrayImage.data.results);
            setInput("");
        }catch(err){
            setError("Error in fetching image");
        }
    }

    return(
        <>
        <div className={styles.container}>
            <div className={styles.input} >
            <input type="text" placeholder='Search Image' onChange={getInput} value={input}/>
            <button className={styles.btn} onClick={getImage}>Search</button>

            </div>
            {error && <p className={styles.error}>{error}</p>}
                
                {
                    image.map((imgObj ,index) =>(
                    <div className={styles.imageGrid}>
                       <div className={styles.image}>
                          <img src={imgObj.urls.small} />
                       </div> 
                    </div>
                    ))
                }
            
        </div>
        </>
    )
}

export default FetchImage;


// access key cN6JLczc5oj5XSNx8ngEyNVjQRzs5Lhc3UoMK2Ik7wE
// secret key _DEUpOkkDDVfsmQyLX_9qEgnHwQ_qwYUtRpcjyMFJ3Q