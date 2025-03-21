import { useEffect, useRef, useState } from "react";
import "./App.css";

import Switch from "./components/Switch";
import HeadingForm from "./components/HeadingForm";
import EducationForm from "./components/EducationForm";
import WorkXpForm from "./components/WorkXpForm";
import SkillsForm from "./components/SkillsForm";

function App() {
    const [selected, setSelected] = useState(0);
    const [workExperiences, setWorkExperiences] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [skills, setSkills] = useState([]);
    const RESUME_SECTIONS = [
        ["Heading", <HeadingForm />],
        [
            "Education",
            <EducationForm
                certifications={certifications}
                setCertifications={setCertifications}
            />,
        ],
        [
            "Work Experience",
            <WorkXpForm
                workExperiences={workExperiences}
                setWorkExperiences={setWorkExperiences}
            />,
        ],
        ["Skills", <SkillsForm skills={skills} setSkills={setSkills} />],
    ];
    function validateHeader(forceSwitch = false) {
        const headerForm = document.querySelector(".headingFormContainer");
        const inputs = Array.from(headerForm.querySelectorAll("input, select"));

        inputs.sort((a, b) => {
            // Sort by priority
            return a.dataset.priority - b.dataset.priority;
        });

        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            const shouldValidate = input.classList.contains("validate");
            const isInvalid = !input.reportValidity();

            if (shouldValidate && isInvalid) {
                if (forceSwitch) {
                    setSelected(0);
                } else {
                    input.reportValidity();
                }
                return false;
            }
        }

        return true;
    }

    // Validate the header after tabs are changed
    useEffect(() => {
        if (selected === 0) {
            // We only need to validate the header if the selected tab is the heading tab
            validateHeader(false);
        }
    }, [selected]);

    function buildResumeBtnClicked() {
        const validHeader = validateHeader(true);
        if (!validHeader) {
            return;
        }

        // Header is valid, ready to submit data!
        const query = [
            ".headingFormContainer input,",
            ".headingFormContainer select",
        ].join(" ");

        const headerFields = new Map(
            Array.from(document.querySelectorAll(query)).map((field) => [
                field.name,
                field.value,
            ])
        );

        console.log(headerFields);
    }

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
                <button
                    className="generateResumeBtn"
                    onClick={buildResumeBtnClicked}
                >
                    Build Resume
                </button>
            </div>
            <div className="panelContainer">
                <form className="resumeForm" autoComplete="off" id="ResumeForm">
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
