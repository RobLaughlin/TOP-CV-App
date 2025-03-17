import React from "react";
import "../styles/EducationForm.css";

function EducationForm() {
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
                        />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="SchoolLocation">SCHOOL LOCATION</label>
                        <input type="text" id="SchooLocation" />
                    </div>
                    <div className="inputWrapper fieldOfStudyWrapper">
                        <label htmlFor="FieldOfStudy" className="required">
                            FIELD OF STUDY/CERTIFICATION
                        </label>
                        <input type="text" id="FieldOfStudy" required />
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
                        />
                    </div>
                </div>
            </fieldset>
        </div>
    );
}

export default EducationForm;
