import React from "react";
import "../App.css";

export default function PdfButton({ title, fileName }) {
  const handleOpenPdf = () => {
    window.open(
      `${process.env.PUBLIC_URL}/pdfs/${fileName}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <button onClick={handleOpenPdf} className="pdf-button">
      {title}
    </button>
  );
}
