import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h1 className="title">מאגר קבצי PDF</h1>
        <div className="links">
          <Link to="/">בית</Link>
          <Link to="/page1">עמוד 1</Link>
          <Link to="/page2">עמוד 2</Link>
          <Link to="/page3">עמוד 3</Link>
        </div>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="*" element={<Home />} /> {/* יטען את הבית אם אין נתיב */}
        </Routes>
      </div>

      <img
        src={process.env.PUBLIC_URL + '/collegeLogoText.png'}
        alt="collegeLogoText"
        className="collegeLogoText"
      />
    </Router>


  );
}

export default App;
