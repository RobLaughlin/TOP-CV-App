import { useEffect, useRef, useState } from "react";
import "./App.css";

import Switch from "./components/Switch";
import HeadingForm from "./components/HeadingForm";
import EducationForm from "./components/EducationForm";
import WorkXpForm from "./components/WorkXpForm";
import SkillsForm from "./components/SkillsForm";

import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function App() {
    const [selected, setSelected] = useState(0);
    const [workExperiences, setWorkExperiences] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [skills, setSkills] = useState([]);
    const [submittedHeaders, setSubmittedHeaders] = useState(new Map());

    console.log(workExperiences);
    console.log(certifications);
    console.log(skills);
    console.log(submittedHeaders);

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

    function formatDate(dateString) {
        return new Date(dateString)
            .toDateString()
            .split(" ")
            .slice(1)
            .join(" ");
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

        setSubmittedHeaders(headerFields);
        const resumeContainer = document.querySelector(
            ".finishedResumeContainer"
        );

        resumeContainer.classList.remove("slideOut");
        resumeContainer.classList.remove("invisible");
        resumeContainer.classList.add("slideIn");
    }

    function itemClicked(e) {
        const id = Number(e.target.dataset.id);
        if (id !== selected) {
            setSelected(id);
        }
    }

    function closeBtnClicked() {
        const finishedResume = document.querySelector(
            ".finishedResumeContainer"
        );

        finishedResume.classList.remove("slideIn");
        finishedResume.classList.add("slideOut");
        finishedResume.classList.add("invisible");
    }

    return (
        <>
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
                    <form
                        className="resumeForm"
                        autoComplete="off"
                        id="ResumeForm"
                    >
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
            <div className="finishedResumeContainer">
                <div className="body">
                    <IconButton
                        aria-label="close"
                        className="closeBtn"
                        size="medium"
                        onClick={closeBtnClicked}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                    <div className="finishedHeaderContainer container">
                        <h1>
                            {submittedHeaders.get("FirstName")}{" "}
                            {submittedHeaders.get("LastName")}
                        </h1>
                        <h3>
                            {submittedHeaders.get("EmailAddress")} | +1{" "}
                            {submittedHeaders.get("PhoneNumber")}
                        </h3>
                        <h3>
                            {submittedHeaders.get("City")},{" "}
                            {submittedHeaders.get("State")}{" "}
                            {submittedHeaders.get("Zip")}
                        </h3>
                    </div>
                    <hr />
                    <div className="finsihedEducationContainer container">
                        <h1>Education</h1>
                        <ul>
                            {certifications.map(({ certification, key }) => {
                                return (
                                    <li key={key}>
                                        <h3>
                                            {certification.fieldOfStudy} |{" "}
                                            {formatDate(
                                                certification.completionDate
                                            )}
                                        </h3>
                                        <h4>
                                            {certification.school}
                                            {certification.schoolLocation !== ""
                                                ? " | " +
                                                  certification.schoolLocation
                                                : ""}
                                        </h4>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <hr />
                    <div className="finishedWorkXpContainer container">
                        <h1>Work Experience</h1>
                        <ul>
                            {workExperiences.map(({ xp, key }) => {
                                return (
                                    <li key={key}>
                                        <h3>
                                            {xp.company} | {xp.location}
                                        </h3>
                                        <h3>{xp.jobTitle}</h3>
                                        <h4>
                                            From {xp.startDate} to {xp.endDate}
                                        </h4>
                                        <p>{xp.responsibilities}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <hr />
                    <div className="finishedSkillsContainer container">
                        <h1>Skills</h1>
                        <ul>
                            {skills.map(({ skill, key }) => {
                                return (
                                    <li key={key}>
                                        <b>{skill.name}</b> -{" "}
                                        {skill.description}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
