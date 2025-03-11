import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

import Switch from "./components/Switch";
import HeadingForm from "./components/HeadingForm";
import EducationForm from "./components/EducationForm";
import WorkXpForm from "./components/WorkXpForm";
import SkillsForm from "./components/SkillsForm";
import SummaryForm from "./components/SummaryForm";

function App() {
    const [selected, setSelected] = useState(0);
    const formProps = useForm();
    const { handleSubmit } = formProps;

    const RESUME_SECTIONS = [
        ["Heading", <HeadingForm formProps={formProps} />],
        ["Education", <EducationForm formProps={formProps} />],
        ["Work Experience", <WorkXpForm formProps={formProps} />],
        ["Skills", <SkillsForm formProps={formProps} />],
        ["Summary", <SummaryForm formProps={formProps} />],
    ];

    function itemClicked(e) {
        const id = Number(e.target.dataset.id);
        if (id !== selected) {
            setSelected(id);
        }
    }

    function onSubmit(data) {
        console.log(data);
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
                <form className="resumeForm" onSubmit={handleSubmit(onSubmit)}>
                    {RESUME_SECTIONS.map((item, idx) => {
                        const [_, form] = item;
                        const display = idx === selected ? "block" : "none";
                        return (
                            <div className="panel" style={{ display }}>
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
