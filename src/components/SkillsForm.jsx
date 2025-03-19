import React from "react";
import "../styles/SkillsForm.css";

function SkillsForm() {
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
                    <button className="addSkillBtn" type="button">
                        Add Skill
                    </button>
                </div>
            </fieldset>
        </div>
    );
}

export default SkillsForm;
