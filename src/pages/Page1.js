import React, { useState } from "react";
import PdfButton from "../components/PdfButton";
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
          <PdfButton title="מבנה הרשות המקומית בשעת חירום" fileName="pdf1.pdf" />
          <PdfButton title="אתר שיתופי ידע - אוכלוסייה במפקדות" fileName="pdf2.pdf" />
          <PdfButton title="משקים בין מפעלים" fileName="pdf3.pdf" />
        </div>
      )}
    </div>
  );
}
