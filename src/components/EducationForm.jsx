import React, { useState } from "react";
import "../styles/EducationForm.css";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

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
        const [school, location, fieldOfStudy, completionDate] = inputs.map(
            (input) => input.value
        );

        setCertifications([
            ...certifications,
            {
                certification: new Certification(
                    school,
                    fieldOfStudy,
                    completionDate,
                    location
                ),
                key: crypto.randomUUID(),
            },
        ]);
    }

    function removeCertification(keyToRemove) {
        setCertifications([
            ...certifications.filter(({ key }) => {
                return key !== keyToRemove;
            }),
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
                    <div className="certificationsContainer">
                        <table className="certifications">
                            <thead>
                                <tr>
                                    <th>School</th>
                                    <th>Location</th>
                                    <th>Certification</th>
                                    <th>Graduation Date</th>
                                    <th className="certRemovalHeader"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {certifications.map(
                                    ({ certification, key }) => {
                                        return (
                                            <tr key={key}>
                                                <td>{certification.school}</td>
                                                <td>
                                                    {
                                                        certification.schoolLocation
                                                    }
                                                </td>
                                                <td>
                                                    {certification.fieldOfStudy}
                                                </td>
                                                <td>
                                                    {
                                                        certification.completionDate
                                                    }
                                                </td>
                                                <td>
                                                    <IconButton
                                                        aria-label="delete"
                                                        className="deleteBtn"
                                                        size="small"
                                                        color="error"
                                                        onClick={() => {
                                                            removeCertification(
                                                                key
                                                            );
                                                        }}
                                                    >
                                                        <DeleteIcon fontSize="inherit" />
                                                    </IconButton>
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </fieldset>
        </div>
    );
}

export default EducationForm;
