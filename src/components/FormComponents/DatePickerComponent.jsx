import React from 'react'
import { useField, Form, FormikProps, Formik } from 'formik';
import { Label } from '../StyledComponents/Label'
import { Input } from '../StyledComponents/Input'
import { ErrorLabel } from '../StyledComponents/ErrorLabel'
import { FormField } from '../StyledComponents/FormField';

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
