import React, { useEffect, useState } from "react";
import "./addtodo.css";
import { addTodo } from "../redux/actions/todo";
import { connect } from "react-redux";
import { v4 } from "uuid";
import { SECRET_KEY } from "../Key";

const Addtodo = ({ addTodoReducer, todos }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    updatestate: false,
    favourite: false,
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    addTodoReducer({ ...todo, id: v4() });
    console.log(todos);
  
    // if(temp)
    // localStorage.setItem(SECRET_KEY,JSON.stringify([...temp,todo]))
    // else
    // localStorage.setItem(SECRET_KEY,JSON.stringify([todo]))
    // setTodo({
    //   title: " ",
    //   description: " ",
    //   updatestate: false,
    //   favourite: false,
    // });
  };
  // useEffect(()=>{
  //   let temp=JSON.parse(localStorage.getItem(SECRET_KEY))
  //   if(temp)
  //   temp.map((data,index)=>{
  //     addTodoReducer({...data})

  //   })
    
  // },[])

  return (
    <div className="add-container">
      <h1 className="add-head">Todo List {todos.length}</h1>
      <div className="add-wrapper">
        <form onSubmit={handleSubmit}>
          <span className="add-title">Todo Title</span>
          <input
            className="add-title-input"
            value={todo.title}
            onChange={(event) => {
              setTodo({ ...todo, title: event.target.value });
            }}
            type="text"
          />
          <span className="add-title">Description</span>
          <input
            className="add-title-input desc"
            value={todo.description}
            onChange={(event) => {
              setTodo({ ...todo, description: event.target.value });
            }}
            type="text"
          />
          <button className="add-button">Add</button>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { todos: state.todos };
};
const mapDispatchToProps = (dispatch) => ({
  addTodoReducer: (todo) => {
    dispatch(addTodo(todo));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Addtodo);
