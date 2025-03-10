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
    return (
        <div className="appContainer">
            <div className="sectionContainer">
                <header>
                    <h1>Build a Resume!</h1>
                </header>
                <Switch items={RESUME_SECTIONS} />
            </div>
            <div className="panelContainer"></div>
        </div>
    );
}

export default App;
