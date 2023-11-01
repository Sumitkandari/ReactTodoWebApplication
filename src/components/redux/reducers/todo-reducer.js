import { ADD_TODO, DELETE_TODO, FAVOURITE, UPDATE_TODO } from "../actions/action.types"

const INITIAL_STATE=[]
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ADD_TODO:

            
            return [...state,action.payload]

        case UPDATE_TODO:
            
            
            return state.map((todo)=>{
                if(todo.id===action.payload.todoID ){
                    todo.title=action.payload.todo.title
                    todo.description=action.payload.todo.description
                    todo.updatestate=!todo.updatestate;
                    return todo;
                }
               
                    return todo;
            })
        case DELETE_TODO:
            return state.filter((todo)=>todo.id!==action.payload)
        case FAVOURITE:
            return state.map((todo)=>{
                if(todo.id===action.payload.todoID){
                    todo.favourite=!todo.favourite;
                    return todo;
                }
                return todo

            })
        default:
            return state;
    }

}