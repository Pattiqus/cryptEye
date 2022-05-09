import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterLayout from './components/layouts/FooterLayout'
import Home from './components/pages/Home'
import Signup from './components/pages/Signup'
import Dashboard from './components/pages/Dashboard'
import NavLayout from './components/layouts/NavLayout';

function App() {
  return (
    <>
      <Router>
        <NavLayout/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
        <FooterLayout/>
      </Router>
    </>
  );
}

export default App;
