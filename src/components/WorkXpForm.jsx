import React from "react";
import "../styles/WorkXpForm.css";

function WorkXpForm() {
    function addWorkExperienceBtnClicked(e) {
        // Validate the work experience subform
        const grid = e.target.parentElement;
        const inputs = Array.from(grid.querySelectorAll("input"));

        // Append the textarea input to validate too
        inputs.push(grid.querySelector("#WorkResponsibilities"));

        inputs.sort((a, b) => {
            // Sort by priority
            return a.dataset.priority - b.dataset.priority;
        });

        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            const shouldValidate = input.classList.contains("validate");
            const isInvalid = !input.reportValidity();

            if (shouldValidate && isInvalid) {
                // Continue no further if subform is invalid
                return;
            }
        }
    }

    function validateDates(e) {
        const grid = e.target.parentElement.parentElement;
        const workStartDate = grid.querySelector("#WorkStartDate");
        const workEndDate = grid.querySelector("#WorkEndDate");
        const startDate = new Date(workStartDate.value);
        const endDate = new Date(workEndDate.value);

        if (endDate <= startDate) {
            workEndDate.setCustomValidity(
                "End date must be set later than the start date"
            );
        } else {
            workEndDate.setCustomValidity("");
        }
        workEndDate.reportValidity();
    }

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
                            onChange={validateDates}
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
                            onChange={validateDates}
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
                    <button
                        className="addExperienceBtn"
                        type="button"
                        onClick={addWorkExperienceBtnClicked}
                    >
                        Add Work Experience
                    </button>
                </div>
            </fieldset>
        </div>
    );
}

export default WorkXpForm;
