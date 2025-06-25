// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import './index.scss'


const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />

    </Routes>
  </Router>
);

export default App;