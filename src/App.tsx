import { Provider } from "react-redux";
import { store } from "./store";
import { Login } from "./page/Login/Login";
import Register from "./page/Register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./page/Dashboard/Dashboard";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
