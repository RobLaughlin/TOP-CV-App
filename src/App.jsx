import { useState } from "react";
import "./App.css";
import Switch from "./components/Switch";
import Heading from "./components/Heading";
import Education from "./components/Education";
import WorkXp from "./components/WorkXp";
import Skills from "./components/Skills";
import Summary from "./components/Summary";

const RESUME_SECTIONS = [
    ["Heading", <Heading />],
    ["Education", <Education />],
    ["Work Experience", <WorkXp />],
    ["Skills", <Skills />],
    ["Summary", <Summary />],
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
                    <h1 className="title">Build a Resume!</h1>
                </header>
                <Switch
                    items={RESUME_SECTIONS.map((item) => {
                        return item[0];
                    })}
                    itemClicked={itemClicked}
                    selected={selected}
                />
            </div>
            <div className="panelContainer">
                <div className="panel">{RESUME_SECTIONS[selected][1]}</div>
            </div>
        </div>
    );
}

export default App;
