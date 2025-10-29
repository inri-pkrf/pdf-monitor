import React from "react";
import PdfButton from "../components/PdfButton";

export default function Page2() {
  return (
    <div className="page">
      <h2>עמוד 2 - עידוד ונהלים</h2>
      <PdfButton title="עידוד - הערכת מצב רשות" fileName="pdf4.pdf" />
      <PdfButton title="עידוד עוגן איזון - מאשפזים" fileName="pdf5.pdf" />
    </div>
  );
}
