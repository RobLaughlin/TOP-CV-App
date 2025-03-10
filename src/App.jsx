import { useState } from "react";
import "./App.css";
import Switch from "./components/Switch.component";

const RESUME_SECTIONS = [
    "Heading",
    "Education",
    "Work Experience",
    "Skills",
    "Summary",
];

function App() {
    const [selected, setSelected] = useState(0);

    function itemClicked(e) {
        const id = Number(e.target.dataset.id);
        if (id !== selected) {
            setSelected(id);
        }
    }

    return (
        <div className="appContainer">
            <div className="sectionContainer">
                <header>
                    <h1>Build a Resume!</h1>
                </header>
                <Switch
                    items={RESUME_SECTIONS}
                    itemClicked={itemClicked}
                    selected={selected}
                />
            </div>
            <div className="panelContainer"></div>
        </div>
    );
}

export default App;
