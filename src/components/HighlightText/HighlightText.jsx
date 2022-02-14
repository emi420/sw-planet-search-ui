import React from 'react';
import "./HighlightText.css";

/*
  Hightight marching substring in string
*/
const HighlightText = function ({ text, highlightedText }) {
    try {
        const re = new RegExp(highlightedText.replace(/[\W_]+/g," "), "gi");
        const result = re.exec(text, highlightedText);
        if (result) {
            return [
                text.substring(0, result.index), 
                <span key={highlightedText} className="HighlightedText">{ result[0] }</span>, 
                text.substring(result.index + highlightedText.length, text.length)
            ]
        }
    } catch(e) {}
    return <span>{text}</span>;
}

export default HighlightText;
