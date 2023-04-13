import React from "react";
import { render } from "react-dom";
function Popup() {
    return (
        <div>
            <span>Bestie AI</span>
        </div>
    )
}

render(<Popup/>, document.getElementById('react-target'))