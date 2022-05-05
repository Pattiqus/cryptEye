import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavLayout from './components/layouts/navLayout';
import FooterLayout from './layouts/footer/FooterLayout'
import Home from './components/pages/Home'
import Signup from './components/pages/Signup'
import Dashboard from './components/pages/Dashboard'

function App() {
  return (
    <>
      <Router>
        <NavLayout/>
          <Routes>
              <Route path='/' element={<Home/>}>
              </Route>
              <Route path='/signup' element={<Signup/>}>
              </Route>
              <Route path='/dashboard' element={<Dashboard/>}>
              </Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
