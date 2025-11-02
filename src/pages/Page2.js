import React from "react";
import "../App.css";

export default function Page2() {
  return (
    <div className="page">
      <h2>עמוד 2 - עידוד ונהלים</h2>

      <div className="pdf-list">
        <a
          href={`${process.env.PUBLIC_URL}/pdfs/pdf4.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="pdf-button"
        >
          <span className="pdf-icon">📄</span>
          עידוד - הערכת מצב רשות
        </a>

        <a
          href={`${process.env.PUBLIC_URL}/pdfs/pdf5.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="pdf-button"
        >
          <span className="pdf-icon">📄</span>
          עידוד עוגן איזון - מאשפזים
        </a>
      </div>
    </div>
  );
}
