import React, { useState } from "react";
import "../styles/Switch.component.css";

function Switch({ itemList, selectedItem = null }) {
    const [items, setItems] = useState(
        itemList.map((item) => {
            return {
                text: item,
                id: crypto.randomUUID(),
            };
        })
    );
    const [selected, setSelected] = useState(selectedItem);

    function itemClicked(e) {
        const id = e.target.dataset.id;
        if (id !== selected) {
            setSelected(id);
        }
    }

    return (
        <ul className="switch">
            {items.map((item) => {
                const isSelected = selected === item.id;
                const className = "item" + (isSelected ? " selected" : "");
                return (
                    <li
                        className={className}
                        key={item.id}
                        data-id={item.id}
                        onClick={itemClicked}
                    >
                        {item.text}
                    </li>
                );
            })}
        </ul>
    );
}

export default Switch;
