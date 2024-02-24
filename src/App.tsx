import React, { useEffect } from "react";
import "./App.css";
import { FirstComponent } from "./components";
import { ProductTable } from "./components/ProductTable/ProductTable";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login/Login";
import TodoList from "./components/TodoList/TodoList";
import { useToken } from "./components/useToken/useToken";

function App() {
  const { getToken, saveToken } = useToken();

  // useEffect(() => {
  //   if (!getToken()) {
  //     console.log("In Get App");
  //     redirect("/");
  //   }
  // }, [getToken]);

  if (!getToken()) {
    return <Login setToken={saveToken} />;
  }

  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductTable />} />
          <Route path="/FirstComponent" element={<FirstComponent />} />
          <Route path="/productTable" element={<ProductTable />} />
          <Route path="/todoList" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
