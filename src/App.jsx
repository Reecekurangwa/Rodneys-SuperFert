    // src/App.jsx
    import React from "react";
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import LandingPage from "./pages/LandingPage";
    import WhoWearePage from "./pages/Who-we-arePage";
    import NewsPage from "./pages/NewsandEventsPage";
    import Navbar from "./components/Navbar/Navbar"; // NEW: Import your Navbar component
    import './index.scss'; // Your global SASS entry point

    const App = () => (
      <Router>
        <Navbar /> {/* NEW: Render your Navbar here, outside of Routes */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/who-we-are" element={<WhoWearePage />} />
          <Route exact path="/News" element={<NewsPage />} />
          {/* Add other routes here as needed */}
        </Routes>
      </Router>
    );

    export default App;
    