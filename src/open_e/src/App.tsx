
import React, { useState } from 'react';
import './App.css';
import {  BrowserRouter as Router,  Routes,  Route, Link} from "react-router-dom";
import Dashboard from './UserSpace/dashboard';
import Login from './components/login/login';
import Home from './Home/Home';


function App() {
  
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
      <>
      <Router>
        <Link to="/">Home</Link>
        

        <Routes>
          <Route index element={<Home />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;


