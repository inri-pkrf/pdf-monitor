import React from "react";
import "../App.css";

export default function PdfButton({ title, fileName }) {
    return (
        <a
            href={`${process.env.PUBLIC_URL}/pdfs/${fileName}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-button"
        >
            <span className="pdf-icon">📄</span>
            {title}
        </a>
    );
}