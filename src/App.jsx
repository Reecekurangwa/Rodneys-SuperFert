// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import WhoWearePage from "./pages/Who-we-arePage";
import NewsPage from "./pages/NewsandEventsPage";
import './index.scss'


const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/who-we-are" element={<WhoWearePage />} />
      <Route exact path="/News" element={<NewsPage />} />
      


    </Routes>
  </Router>
);

export default App;