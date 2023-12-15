
export const todoReducer=(inicialState,action)=>{

    switch (action.type) {
        case 'todo add':
            return [...inicialState,action.add]
          
        case 'todo remove':
            return inicialState.filter(todo=>todo.id!==action.id)
        case 'todo line':
            return inicialState.map(todo=>{
                if(todo.id===action.id){
                    return{
                        ...todo,
                        done:!todo.done
                    }
                }
                return todo;
            })
        default:
            return inicialState;
    }

}