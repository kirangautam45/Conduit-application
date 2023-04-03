import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Dashboard from './page/Dashboard/Dashboard';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import Slug from './page/Slug/Slug';
import NewArticle from './page/NewArticle/Index';
import User from './page/User/index';
import Settings from './page/Settings';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

            <Route path="/article/:slug" element={<Slug />} />
            <Route path="/editor" element={<NewArticle />} />
            <Route path="/setting" element={<Settings />} />
            <Route path="/username" element={<User />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
