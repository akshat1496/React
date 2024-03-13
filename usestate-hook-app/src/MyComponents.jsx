import { useState } from "react";

// import React,{usestate} from 'react';
function MyComponent() {
    const [name , setName]=useState("Guest");
    const updateName =()=>{setName("BKL")}
    const [age , setAge] = useState(0);
    const increment =()=>{setAge(age+1)}
    const [isEmployed , setIsEmployed] = useState(false) ;  //boolean value
    const  changeStatus= () => {setIsEmployed(!isEmployed)};
        return (
            <>
            <div>
               <h1 className="Greet">Hello  : {name}</h1> 
               <button onClick={updateName}>Set Name</button>
            </div>
            <div>
               <h1 className="Greet">Age  : {age}</h1> 
               <button onClick={increment}>Increment Age</button>
            </div>
            <div>
               <h1 className="Greet">Status  : {isEmployed ? "Yes":"No"}</h1> 
               <button onClick={changeStatus}>Change Status</button>
            </div>
            </>
        )
}

export  default MyComponent;