import { Container } from "react-bootstrap";

// import DisplayTodos from "./components/DisplayTodos";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import Addtodo from "./components/addTodo/Addtodo";
import "./App.css";
import Displaytodos from "./components/displaytodos/Displaytodos";
import DisplayTodos from "./components/DisplayTodos";
import AddTodo from "./components/AddTodo";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Displayfavourite from "./components/favourite/Displayfavourite";
import { useEffect } from "react";
import axios from 'axios';

function App() {
  
  return (
    <Provider store={store}>
      {/* <Container className="py-3">
      <AddTodo />
      <DisplayTodos />
    </Container> */}
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Addtodo />
                  <Displaytodos />
                </>
              }
            />
            <Route path="/favourite" element={<Displayfavourite />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
