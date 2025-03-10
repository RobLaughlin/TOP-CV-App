import React, { useState } from "react";
import "../styles/Switch.component.css";

function Switch({ items, selectedItem = null }) {
    const [selected, setSelected] = useState(selectedItem);

    function itemClicked(e) {
        const id = Number(e.target.dataset.id);
        if (id !== selected) {
            setSelected(id);
        }
    }

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
