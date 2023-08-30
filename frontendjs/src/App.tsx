import React from 'react';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  Component={Register} />
        <Route path="/Home"  Component={Home} /> 
        <Route path="/Login" Component={Login} />
      </Routes>
      <ToastContainer />
    </Router>

  );
}

export default App;
