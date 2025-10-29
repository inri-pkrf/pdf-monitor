import React from "react";
import PdfButton from "../components/PdfButton";

export default function Page3() {
  return (
    <div className="page">
      <h2>עמוד 3 - משימות ותפקידים</h2>
      <PdfButton title="משימה - הכנת של פיקוד העורף באינסטגרם" fileName="pdf6.pdf" />
      <PdfButton title="תפקיד משק - תפקידי התנהגות אוכלוסייה" fileName="pdf7.pdf" />
    </div>
  );
}