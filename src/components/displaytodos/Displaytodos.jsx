import React, { useEffect, useState } from "react";
import "./displaytodo.css";
import { connect } from "react-redux";
import { deleteTodo, favouriteTodo, updateTodo } from "../redux/actions/todo";
import UpdateTodo from "../updateTodo/UpdateTodo";
import { SECRET_KEY } from "../Key";
const Displaytodos = ({
  todos,
  updateTodoReducer,
  deleteToReducer,
  favouriteTodoReducer,
}) => {
  
 
  return (
    <div className="dis-container">
      <div className="dis-wrapper">
        {todos.map((data, index) => {
          
          return (
            <div className="dis-cards" key={index}>
              {data.updatestate ? (
                <UpdateTodo {...data}   />
              ) : (
                <>
                  <h1 className="dis-title">{data.title}</h1>

                  <p className="dis-desc">{data.description}</p>
                  <div
                    className="dis-favicon"
                    style={{
                      backgroundColor: data.favourite ? "red" : "white",
                      transition: "1s",
                    }}
                    onClick={() => {
                      
                      favouriteTodoReducer(data.id);
                    }}
                  ></div>
                  <div className="dis-btns">
                    <button
                      className="dis-btn"
                      onClick={() => {
                       updateTodoReducer(data,data.id)
                      }}
                    >
                      UPDATE
                    </button>
                    <button
                      className="dis-btn delete"
                      onClick={() => {
                        deleteToReducer(data.id);
                      }}
                    >
                      DELETE
                    </button>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { todos: state.todos };
};
const mapDispatchToProps = (dispatch) => ({
  updateTodoReducer: (todo, id) => {
    dispatch(updateTodo(todo, id));
  },
  deleteToReducer: (id) => {
    dispatch(deleteTodo(id));
  },
  favouriteTodoReducer: (id) => {
    dispatch(favouriteTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Displaytodos);
