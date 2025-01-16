import { useState } from "react";

const Calculator = () =>{

    // taking the number input from the user
    const[input , setInput] = useState("");
    const inputHandle = (value) =>{
        setInput((prevValue) => prevValue + value); // concationaiton of the user input
    }

    //  result output funciton
    const[result , setResult] = useState(0);
     const calculateValue = () =>{
       try{
        setResult(eval(input));
       }catch(err){
        setResult("Not a Valid Operation");
       }
     }

    //  resetting the input when reset btn is pressed

    const resetInput = () =>{
        setInput("");
        setResult(0);
    }
    // removing the last character from the input 

    const removeLastChar = () =>{
        setInput((prevValue) => prevValue.slice(0 , -1));
        setResult(0);
    }
return <>
    <div className="calculator-box">
        <div className="display">
            <input type="text" readOnly value={input} />
            <div className="results"  >{result}</div>
            <div className="btn-container">
                <button onClick={() =>{inputHandle('7')}} >7</button>
                <button onClick={() =>{inputHandle('8')}} >8</button>
                <button onClick={() =>{inputHandle('9')}} >9</button>

                <button className="del" onClick={removeLastChar}>DEL</button>

                <button onClick={() =>{inputHandle('4')}} >4</button>
                <button onClick={() =>{inputHandle('5')}} >5</button>
                <button onClick={() =>{inputHandle('6')}} >6</button>
                <button onClick={() =>{inputHandle('+')}}>+</button>
                
                <button onClick={() =>{inputHandle('1')}} >1</button>
                <button onClick={() =>{inputHandle('2')}} >2</button>
                <button onClick={() =>{inputHandle('3')}} >3</button>
                <button onClick={() =>{inputHandle('-')}}>-</button>

                <button onClick={() =>{inputHandle('.')}} >.</button>
                <button onClick={() =>{inputHandle('0')}} >0</button>
                <button onClick={() =>{inputHandle('/')}}>/</button>
                <button onClick={() =>{inputHandle('*')}}>*</button>

                <button className="reset" onClick={resetInput}>Reset</button>
                <button className="equals" onClick={calculateValue}>=</button>


            </div>
        </div>
    </div>
</>
};
export default Calculator;