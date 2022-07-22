import { useState } from "react";
export default function Plusun({text,nb}) {
    const [count,setCount] =useState(nb);


    return(


        <div>  
        <p>{text}  {count}</p>
         <button onClick={() => setCount(count+1)}>Incrementer</button>
      </div>



    )
};
