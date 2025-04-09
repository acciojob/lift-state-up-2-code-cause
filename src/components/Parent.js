import React, {useState} from "react";
import Child from "./Child";

const Parent=()=>{

    const [value, setValue] = useState('');

    return(
<div className="Parent" style={{backgroundColor: "Green"}}>
            <h1>Parent Component</h1>
          <p>{value}</p>

          <Child
          props= {setValue}/>
        </div>
    )
}
export default Parent;