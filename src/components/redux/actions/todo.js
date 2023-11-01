import { ADD_TODO, DELETE_TODO, FAVOURITE, UPDATE_TODO } from "./action.types";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const updateTodo = (todo,id) => {
  

    return {
      type: UPDATE_TODO,
      payload: {todo:todo,todoID:id},
    };
  };
export const favouriteTodo=(id)=>{
  return {
    type:FAVOURITE,
    payload:{todoID:id}
  }
}
