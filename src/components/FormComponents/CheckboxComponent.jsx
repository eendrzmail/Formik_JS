import React from 'react';
import { useField } from 'formik';

export default function CheckboxComponent({ label, ...props }) {
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={label}>{label}</label>
            {Array.isArray(meta.initialValue)
                ? <input type="checkbox" {...field} {...props} value={label} />
                : <input type="checkbox" {...field} {...props} />}
        </div>
    );
}
