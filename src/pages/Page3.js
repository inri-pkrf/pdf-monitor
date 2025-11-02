import React from "react";
import "../App.css";

export default function Page3() {
  return (
    <div className="page">
      <h2>עמוד 3 - משימות ותפקידים</h2>

      <div className="pdf-list">
        <a
          href={`${process.env.PUBLIC_URL}/pdfs/pdf6.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="pdf-button"
        >
          <span className="pdf-icon">📄</span>
          משימה - הכנת של פיקוד העורף באינסטגרם
        </a>

        <a
          href={`${process.env.PUBLIC_URL}/pdfs/pdf7.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="pdf-button"
        >
          <span className="pdf-icon">📄</span>
          תפקיד משק - תפקידי התנהגות אוכלוסייה
        </a>
      </div>
    </div>
  );
}
