import { useState } from "react"


export const useCounter = (value=1) => {
 
    const [counter, setcounter] = useState(value)
    
    // const increment=()=>{
    //     setcounter(counter+1)
    // };
    // const decrement=()=>{
    //     setcounter(counter-1)
    // };
    // const reset=()=>{
    //     setcounter(value)
    // };
     const calcu=(signo,val=1)=>{
        if(signo==='+'){
            setcounter(counter+val)
        }else if(signo==='-'){
            setcounter(counter-val)
        }else {
            setcounter(value)
        }
     }
    

    
    return {
        counter,
        calcu
    }
    
  
}
