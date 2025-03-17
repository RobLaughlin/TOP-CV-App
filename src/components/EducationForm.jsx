import React, { useState } from "react";
import "../styles/EducationForm.css";

class Certification {
    constructor(school, fieldOfStudy, completionDate, schoolLocation = "") {
        this.school = school;
        this.fieldOfStudy = fieldOfStudy;
        this.completionDate = completionDate;
        this.schoolLocation = schoolLocation;
    }
}

function EducationForm() {
    const [certifications, setCertifications] = useState([]);
    console.log(certifications);

    function addCertificateBtnClicked(e) {
        // Validate the education subform

        const inputs = Array.from(
            e.target.parentElement.querySelectorAll("input")
        );

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

        // Form is valid! We can add this certificate
        setCertifications([
            {
                certification: new Certification(...inputs),
                key: crypto.randomUUID(),
            },
            ...certifications,
        ]);
    }

    return (
        <div className="educationFormContainer formContainer">
            <fieldset className="group">
                <legend>Education</legend>
                <div className="grid">
                    <div className="inputWrapper">
                        <label htmlFor="School" className="required">
                            GRADUATED SCHOOL
                        </label>
                        <input
                            type="text"
                            id="School"
                            className="validate"
                            required
                            data-priority={1}
                        />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="SchoolLocation">SCHOOL LOCATION</label>
                        <input
                            type="text"
                            id="SchooLocation"
                            data-priority={2}
                        />
                    </div>
                    <div className="inputWrapper fieldOfStudyWrapper">
                        <label htmlFor="FieldOfStudy" className="required">
                            FIELD OF STUDY/CERTIFICATION
                        </label>
                        <input
                            type="text"
                            id="FieldOfStudy"
                            required
                            className="validate"
                            data-priority={3}
                        />
                    </div>
                    <div className="inputWrapper graduationDateWrapper">
                        <label htmlFor="GraduationDate" className="required">
                            GRADUATION/COMPLETION DATE
                        </label>
                        <input
                            type="date"
                            id="GraduationDate"
                            required
                            className="validate"
                            data-priority={4}
                        />
                    </div>
                    <button
                        className="addCertificateBtn"
                        onClick={addCertificateBtnClicked}
                        type="button"
                    >
                        Add Certificate
                    </button>
                </div>
            </fieldset>
        </div>
    );
}

export default EducationForm;
