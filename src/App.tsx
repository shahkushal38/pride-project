import React from "react";
import "./App.css";
import { FirstComponent } from "./components";
import { ProductTable } from "./components/ProductTable/ProductTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/FirstComponent" element={<FirstComponent />} />
          <Route path="/productTable" element={<ProductTable />} />
          <Route path="/todoList" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
