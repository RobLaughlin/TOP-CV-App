import React from "react";
import "../styles/Switch.css";

function Switch({ items, itemClicked, selected = null }) {
    return (
        <ul className="switch">
            {items.map((item, idx) => {
                const isSelected = selected === idx;
                const className = "item" + (isSelected ? " selected" : "");
                return (
                    <li
                        className={className}
                        key={idx}
                        data-id={idx}
                        onClick={itemClicked}
                    >
                        {item}
                    </li>
                );
            })}
        </ul>
    );
}

export default Switch;
