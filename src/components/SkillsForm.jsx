import React, { useState } from "react";
import "../styles/SkillsForm.css";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

class Skill {
    constructor(name, description = "") {
        this.name = name;
        this.description = description;
    }
}

function SkillsForm({ skills, setSkills }) {
    function addSkillBtnClicked(e) {
        const grid = e.target.parentElement;
        const skillName = grid.querySelector("#SkillName");
        const skillDesc = grid.querySelector("#SkillDescription");

        if (!skillName.reportValidity()) {
            // Check if skill name is valid
            return;
        }

        // Inputs are valid, continue
        const skill = new Skill(skillName.value, skillDesc.value);
        setSkills([
            ...skills,
            {
                skill,
                key: crypto.randomUUID(),
            },
        ]);
    }

    function removeSkill(keyToRemove) {
        setSkills([
            ...skills.filter(({ key }) => {
                return key !== keyToRemove;
            }),
        ]);
    }

    return (
        <div className="skillsContainer formContainer">
            <fieldset className="group">
                <legend>Skills</legend>
                <div className="grid">
                    <div className="inputWrapper">
                        <label htmlFor="SkillName" className="required">
                            NAME OF SKILL
                        </label>
                        <input
                            type="text"
                            id="SkillName"
                            name="SkillName"
                            className="validate"
                            required
                            data-priority={1}
                        />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="SkillDescrption">
                            SKILL DESCRIPTION
                        </label>
                        <textarea
                            name="SkillDescription"
                            id="SkillDescription"
                            data-priority={2}
                        ></textarea>
                    </div>
                    <button
                        className="addSkillBtn"
                        type="button"
                        onClick={addSkillBtnClicked}
                    >
                        Add Skill
                    </button>
                    <ul className="skillsList">
                        {skills.map(({ skill, key }) => {
                            return (
                                <li className="skill" key={key}>
                                    <IconButton
                                        aria-label="delete"
                                        className="deleteBtn"
                                        size="small"
                                        color="error"
                                        onClick={() => {
                                            removeSkill(key);
                                        }}
                                    >
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                    <div className="skillInfo">
                                        <h4>{skill.name}</h4>
                                        <p>{skill.description}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </fieldset>
        </div>
    );
}

export default SkillsForm;
