import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavLayout from './components/layouts/navLayout';

function App() {
  return (
    <>
      <Router>
        <NavLayout/>
      </Router>

    </>
  );
}

export default App;
