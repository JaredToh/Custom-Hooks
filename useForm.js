import { useState } from "react";

export const useForm = (use= {}) => {
  
    const [formState, setformState] = useState(use);


    const onInputChange=({target})=>{
        const {name,value}=target;
        setformState({
            ...formState,
            [name]:value
        })
      }
  const resetForm=()=>{
    setformState(use);
  }
    return {
        ...formState,
        formState,
        onInputChange,
        resetForm
  }
    
  
}
