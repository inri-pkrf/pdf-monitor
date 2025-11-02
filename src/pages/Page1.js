import React, { useState } from "react";
import "../App.css";

export default function Page1() {
  const [showFiles, setShowFiles] = useState(false);

  const handleToggle = () => {
    setShowFiles(!showFiles);
  };

  return (
    <div className="page">
      <h2>עמוד 1 - קבצים כלליים</h2>

      <div>לחצ\י על מנת לראות את הקבצים</div>

      <div className="toggle-switch">
        <input
          type="checkbox"
          id="toggle"
          checked={showFiles}
          onChange={handleToggle}
        />
        <label htmlFor="toggle"></label>
      </div>

      {showFiles && (
        <div className="pdf-list">
          <a
            href={`${process.env.PUBLIC_URL}/pdfs/pdf1.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-button"
          >
            <span className="pdf-icon">📄</span>
            מבנה הרשות המקומית בשעת חירום
          </a>

          <a
            href={`${process.env.PUBLIC_URL}/pdfs/pdf2.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-button"
          >
            <span className="pdf-icon">📄</span>
            אתר שיתופי ידע - אוכלוסייה במפקדות
          </a>

          <a
            href={`${process.env.PUBLIC_URL}/pdfs/pdf3.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-button"
          >
            <span className="pdf-icon">📄</span>
            משקים בין מפעלים
          </a>
        </div>
      )}
    </div>
  );
}
