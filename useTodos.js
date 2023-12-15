import { useEffect, useReducer, useState } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";



const init=()=>{
    return JSON.parse(localStorage.getItem('todos'))||[];
 }
 const inicialState=[

 ]
export const useTodos=()=>{

    
    const [todos, dispatch] = useReducer(todoReducer, inicialState,init )
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
      }, [todos])

      const fun=(valor)=>{
      
        const action={
         type:'todo add',
         add:valor
        }
         dispatch(action)
     }
     const eliminarTodo=(id)=>{
         const action={
             type:'todo remove',
             id:id
         }
         dispatch(action)
         
     }
     const linearTodo=(id)=>{
         const action={
             type:'todo line',
             id:id
         }
         dispatch(action)
         
     }
     const pendientes=todos.filter(todo=>!todo.done).length
  
     
   const countTodos=todos.length;
     
     return{
        todos,
        eliminarTodo,
        linearTodo,
        fun,
        countTodos,
        pendientes
     }
}