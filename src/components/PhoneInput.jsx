import React, { useState } from "react";

function PhoneInput({ ...props }) {
    const [phoneNumber, setPhoneNumber] = useState("");

    function handlePhoneNumberChanged(e) {
        // Remove everything that isn't a digit
        const toRemove = /[^0-9]/g;
        const number = e.target.value.replaceAll(toRemove, "");
        setPhoneNumber(number);
    }

    function formatPhoneNumber(number) {
        let newNumber = number.slice(0, Math.min(number.length, 3));
        if (number.length >= 3) {
            // Area code
            newNumber = `(${newNumber})`;
        }

        if (number.length >= 4) {
            // 3 Digit part of phone number
            newNumber += "-" + number.slice(3, Math.min(6, number.length));
        }

        if (number.length >= 7) {
            // Last 4 digits
            newNumber += "-" + number.slice(6, Math.min(10, number.length));
        }

        return newNumber;
    }

    return (
        <input
            pattern="^\(\d{3}\)-\d{3}-\d{4}$"
            type="tel"
            value={formatPhoneNumber(phoneNumber)}
            onChange={handlePhoneNumberChanged}
            {...props}
        />
    );
}

export default PhoneInput;
