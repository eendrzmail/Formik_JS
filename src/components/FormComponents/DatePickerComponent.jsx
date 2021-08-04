import React from 'react'
import { useField, Form, FormikProps, Formik } from 'formik';
import { Label } from './Label'
import { Input } from './Input'
import { ErrorLabel } from './ErrorLabel'
import { FormField } from './FormField';
import { Dropdown } from './Dropdown';

export default function DatePickerComponent({ label, ...props }) {
    const [field, meta, helpers] = useField(props)
    return (
        <FormField>
            <Label>
                {label}
                <Input type="date" {...field} {...props}></Input>
                {meta.touched && meta.error ? (
                    <ErrorLabel className="error">{meta.error}</ErrorLabel>
                ) : null}
            </Label>
        </FormField>
    )
}
