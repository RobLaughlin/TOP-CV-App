import React, { useState } from "react";

function clamp(value, minValue, maxValue) {
    return Math.min(Math.max(minValue, value), maxValue);
}

function IntInput({
    value = "",
    minValue = -Infinity,
    maxValue = Infinity,
    ...props
}) {
    if (value !== "" && !Number.isInteger(value)) {
        throw new TypeError("Value must be an empty string or an integer");
    }

    if (minValue > maxValue) {
        throw new Error("Min value must be <= Max value");
    }

    const [val, setVal] = useState(value.toString());

    function onChange(e) {
        // If the target is an empty string or integer
        if (e.target.value === "" || /^\d+$/.test(e.target.value)) {
            let newVal = e.target.value;

            // Target is an integer
            if (newVal !== "") {
                const n = Number(newVal);
                const inRange = n >= minValue && n <= maxValue;
                if (!inRange) {
                    return;
                }
            }

            setVal(newVal);
        }
    }

    // Clamp value if value is an integer
    value = value === "" ? "" : Math.min(Math.max(minValue, value), maxValue);

    return <input type="text" value={val} onChange={onChange} {...props} />;
}

export default IntInput;
