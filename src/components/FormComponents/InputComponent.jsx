import React from 'react'
import { useField, Form, FormikProps, Formik } from 'formik';
import { Label } from './Label'
import { Input } from './Input'
import { ErrorLabel } from './ErrorLabel'
import { FormField } from './FormField';

export default function InputComponent({ label, ...props }) {
    const [field, meta, helpers] = useField(props);
    return (
        <FormField>
            <Label>
                {label}
                <Input {...field} {...props} />
            </Label>
            {meta.touched && meta.error ? (
                <ErrorLabel className="error">{meta.error}</ErrorLabel>
            ) : null}
        </FormField>
    )
}
