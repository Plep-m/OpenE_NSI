import React from 'react';
import './App.css';
import {  BrowserRouter as Router,  Routes,  Route, Link} from "react-router-dom";
import Dashboard from './UserSpace/dashboard';
import Home from './Home/Home';


function App() {
  return (
      <>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/Dashboard">Dashbord</Link>

        <Routes>
          <Route index element={<Home />} />
          <Route path="Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


