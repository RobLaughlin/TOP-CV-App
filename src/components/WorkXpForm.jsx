import React from "react";
import "../styles/WorkXpForm.css";

function WorkXpForm() {
    return (
        <div className="workXpFormContainer formContainer">
            <fieldset className="group">
                <legend>Work Experience</legend>
                <div className="grid">
                    <div className="inputWrapper">
                        <label htmlFor="Company" className="required">
                            COMPANY
                        </label>
                        <input
                            type="text"
                            id="Company"
                            className="validate"
                            required
                            data-priority={1}
                        />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="WorkLocation" className="required">
                            WORK LOCATION
                        </label>
                        <input
                            type="text"
                            id="WorkLocation"
                            data-priority={2}
                            required
                            className="validate"
                        />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="WorkStartDate" className="required">
                            START DATE
                        </label>
                        <input
                            type="date"
                            id="WorkStartDate"
                            required
                            className="validate"
                            data-priority={3}
                        />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="GraduationDate" className="required">
                            END DATE
                        </label>
                        <input
                            type="date"
                            id="WorkEndDate"
                            required
                            className="validate"
                            data-priority={4}
                        />
                    </div>
                    <div className="inputWrapper workResponsibilitiesContainer">
                        <label
                            htmlFor="WorkResponsibilities"
                            className="required"
                        >
                            RESPONSIBILITIES &amp; ACCOMPLISHMENTS
                        </label>
                        <textarea
                            name="WorkResponsibilities"
                            id="WorkResponsibilities"
                            required
                            className="validate"
                            data-priority={5}
                        ></textarea>
                    </div>
                    <button className="addExperienceBtn" type="button">
                        Add Work Experience
                    </button>
                </div>
            </fieldset>
        </div>
    );
}

export default WorkXpForm;
