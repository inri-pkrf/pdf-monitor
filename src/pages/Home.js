import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h2 className="title">ברוך הבא!</h2>
      <p>בחרי קטגוריה לצפייה בקבצים:</p>
      <div className="home-buttons">
        <Link to="/page1" className="home-btn">עמוד 1</Link>
        <Link to="/page2" className="home-btn">עמוד 2</Link>
        <Link to="/page3" className="home-btn">עמוד 3</Link>
      </div>
    </div>
  );
}
