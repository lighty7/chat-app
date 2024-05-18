import './App.css';
import React from 'react';
import Head from './components/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/login';

function App() {
  return (
    <Router>
      <div className="App">
        <Head />
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
