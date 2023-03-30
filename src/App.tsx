import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Dashboard from './page/Dashboard/Dashboard';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import Slug from './page/Slug/Slug';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/article/:slug" element={<Slug />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
