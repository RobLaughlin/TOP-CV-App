import React from "react";
import "../styles/HeadingForm.css";
import { useForm } from "react-hook-form";

function HeadingForm({ formProps }) {
    const { register } = formProps;

    return (
        <div className="headingFormContainer">
            <fieldset className="group">
                <legend>Resume header</legend>
                <div className="grid">
                    <div className="inputWrapper">
                        <label for="FirstName">FIRST NAME</label>
                        <input
                            type="text"
                            id="FirstName"
                            {...register("FirstName")}
                        />
                    </div>
                    <div className="inputWrapper">
                        <label for="LastName">LAST NAME</label>
                        <input
                            type="text"
                            id="LastName"
                            {...register("LastName")}
                        />
                    </div>
                    <div className="inputWrapper cityWrapper">
                        <label for="City">CITY</label>
                        <input type="text" id="City" {...register("City")} />
                    </div>
                    <div className="inputWrapper countryWrapper">
                        <label for="Country">COUNTRY</label>
                        <input
                            type="text"
                            id="Country"
                            {...register("Country")}
                        />
                    </div>
                    <div className="inputWrapper zipWrapper">
                        <label for="Zip">ZIP CODE</label>
                        <input type="number" id="Zip" {...register("Zip")} />
                    </div>
                    <div className="inputWrapper">
                        <label for="EmailAddress">EMAIL ADDRESS</label>
                        <input
                            type="email"
                            id="EmailAddress"
                            {...register("EmailAddress")}
                        />
                    </div>
                    <div className="inputWrapper">
                        <label for="PhoneNumber">PHONE NUMBER</label>
                        <input
                            type="tel"
                            id="PhoneNumber"
                            {...register("PhoneNumber")}
                        />
                    </div>
                </div>
            </fieldset>
        </div>
    );
}

export default HeadingForm;
