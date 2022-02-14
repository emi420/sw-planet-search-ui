import React, { useRef } from 'react';
import "./Overlayed.css";

/*
  Overlay over content, useful for focusing some things and shadow others
*/
const Overlayed = function ({ children, onClick, enabled }) {
    const bodyRef = useRef(document.body);
    bodyRef.current.className = enabled ? "OverlayedScrollDisabled" : "";
    
    return (
        <div>
            { enabled && <div onClick={onClick} className="Overlayed"></div> }
            <div className="OverlayedOnTop">{children}</div>
        </div>
    )
}

export default Overlayed;
