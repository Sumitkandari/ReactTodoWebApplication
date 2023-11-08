
import { Provider } from "react-redux";
import store from "./components/redux/store";
import Addtodo from "./components/addTodo/Addtodo";
import "./App.css";
import Displaytodos from "./components/displaytodos/Displaytodos";

import { BrowserRouter, Route, Routes, Navigate,HashRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Displayfavourite from "./components/favourite/Displayfavourite";



function App() {
  
  return (
    <Provider store={store}>
      
      <HashRouter>
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
      </HashRouter>
    </Provider>
  );
}

export default App;
