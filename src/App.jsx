import { useState } from "react";
import "./App.css";

import Switch from "./components/Switch";
import HeadingForm from "./components/HeadingForm";
import EducationForm from "./components/EducationForm";
import WorkXpForm from "./components/WorkXpForm";
import SkillsForm from "./components/SkillsForm";
import SummaryForm from "./components/SummaryForm";

const RESUME_SECTIONS = [
    ["Heading", <HeadingForm />],
    ["Education", <EducationForm />],
    ["Work Experience", <WorkXpForm />],
    ["Skills", <SkillsForm />],
    ["Summary", <SummaryForm />],
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
                <form className="resumeForm" autoComplete="off">
                    {RESUME_SECTIONS.map((item, idx) => {
                        const [_, form] = item;
                        const display = idx === selected ? "block" : "none";
                        return (
                            <div
                                className="panel"
                                style={{ display }}
                                key={idx}
                            >
                                {form}
                            </div>
                        );
                    })}
                </form>
            </div>
        </div>
    );
}

export default App;
