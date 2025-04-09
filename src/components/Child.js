
import React from "react";


const Child=({props})=>{

    console.log(props);
   
    return(
        

        <div className="child" style={{background:"brown", width: "300px"}} > 
            <h1>Child Component</h1>
            <input type="text" placeholder="write something here"  onChange={e=>props(e.target.value)}/>
        </div>
    )
}
export default Child;