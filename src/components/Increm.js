import { useState } from "react";
export default function Increm({text,nb}) {
    const [count,setCount] =useState(nb);


    return(


        <div>  
        <p>{text}  {count}</p>
         <button onClick={() => setCount(count+10)}>Incrementer</button>
      </div>



    )
};
