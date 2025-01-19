import { useState } from "react";
import { accordionData } from "../data";
const Accordion = () =>{

const[acitveindex , setActiveindex] = useState(null);

const heandleInput = (index) =>{
    setActiveindex(acitveindex === index ? null : index )
}
return <>
    <div className="wrapper">
        <h1>Accordion App</h1>
        <div className="header">
            {
                accordionData.map((quesObj , index) =>(
                    <div className ="box" key={index}>
                        <div className="title" onClick={() =>{
                            heandleInput(index);
                        }}>
                           <h2>{quesObj.title}</h2> 
                            <p className="icon">{acitveindex === index ? "-" : "+"}</p>
                        </div>
                    
                        {
                            acitveindex === index && (
                             <div className="content">
                               <p>{quesObj.text}</p>
                            </div>
                            )
                        }
                    </div>
                ))
            }
        </div>
    </div>
</>
}
export default Accordion;