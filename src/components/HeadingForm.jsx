import React, { useState } from "react";
import "../styles/FormContainer.css";
import "../styles/HeadingForm.css";

import { STATES } from "../constants";
import IntInput from "./IntInput";
import PhoneInput from "./PhoneInput";

function HeadingForm() {
    return (
        <div className="headingFormContainer formContainer">
            <fieldset className="group">
                <legend>Resume header</legend>
                <div className="grid">
                    <div className="inputWrapper">
                        <label htmlFor="FirstName" className="required">
                            FIRST NAME
                        </label>
                        <input
                            type="text"
                            id="FirstName"
                            required
                            className="validate"
                        />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="LastName" className="required">
                            LAST NAME
                        </label>
                        <input
                            type="text"
                            id="LastName"
                            required
                            className="validate"
                        />
                    </div>
                    <div className="inputWrapper cityWrapper">
                        <label htmlFor="City" className="required">
                            CITY
                        </label>
                        <input
                            type="text"
                            id="City"
                            required
                            className="validate"
                        />
                    </div>
                    <div className="inputWrapper stateWrapper">
                        <label htmlFor="State" className="required">
                            STATE
                        </label>
                        <select
                            name="State"
                            id="State"
                            className="validate"
                            required
                        >
                            {STATES.map((state, idx) => {
                                return (
                                    <option value={state} key={idx}>
                                        {state}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="inputWrapper zipWrapper">
                        <label htmlFor="Zip" className="required">
                            ZIP CODE
                        </label>
                        <IntInput
                            id="Zip"
                            minValue={0}
                            maxValue={99999}
                            maxLength={5}
                            minLength={5}
                            required
                            className="validate"
                        ></IntInput>
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="EmailAddress" className="required">
                            EMAIL ADDRESS
                        </label>
                        <input
                            type="email"
                            id="EmailAddress"
                            required
                            className="validate"
                        />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="PhoneNumber" className="required">
                            PHONE NUMBER
                        </label>
                        <PhoneInput
                            id="PhoneNumber"
                            name="PhoneNumber"
                            required
                            className="validate"
                        />
                    </div>
                </div>
            </fieldset>
        </div>
    );
}

export default HeadingForm;
