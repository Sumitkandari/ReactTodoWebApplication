import React from "react";
import { connect } from "react-redux";
import { deleteTodo, favouriteTodo, updateTodo } from "../redux/actions/todo";
import "./displayfavourite.css";
import UpdateTodo from "../updateTodo/UpdateTodo";

const Displayfavourite = ({
  todos,
  updateTodoReducer,
  deleteToReducer,
  favouriteTodoReducer,
}) => {
  
  return (
    <div className="fav-container">
      <div className="fav-wrapper">
        {todos.map((data, index) => {
          if (data.favourite) {
            return (
              <div className="fav-cards" key={index}>
                {
                  data.updatestate ? (
                    <UpdateTodo  {...data}/>
                  ) : <>

                <h1 className="fav-title">{data.title}</h1>

                <p className="fav-desc">{data.description}</p>
                <div
                className="fav-favicon"
                style={{
                  backgroundColor: data.favourite ? "red" : "white",
                  transition: "1s",
                }}
                onClick={() => {
                 
                    favouriteTodoReducer(data.id);
                  }}
                  ></div>
                <div className="fav-btns">
                  <button
                    className="fav-btn"
                    onClick={() => {
                      updateTodoReducer(data,data.id)
                    }}
                    >
                    UPDATE
                  </button>
                  <button
                    className="fav-btn delete"
                    onClick={() => {
                      deleteToReducer(data.id);
                    }}
                    >
                    DELETE
                  </button>
                </div>
                </>
                  }
              </div>
            );
          }
          return "";
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
export default connect(mapStateToProps, mapDispatchToProps)(Displayfavourite);
{
  /*  */
}
