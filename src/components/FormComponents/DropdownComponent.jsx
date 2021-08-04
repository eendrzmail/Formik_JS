import React from 'react'
import { useField, Form, FormikProps, Formik } from 'formik';
import { Label } from './Label'
import { Input } from './Input'
import { ErrorLabel } from './ErrorLabel'
import { FormField } from './FormField';
import { Dropdown } from './Dropdown';

export default function DropdownComponent({ label, optionArray, ...props}) {
    const [field, meta, helpers] = useField(props);
    return (
        <FormField>
            <Label>
                {label}
                <Dropdown {...field} {...props}>
                    {optionArray.map(x => {
                        return <option>{x}</option>
                    })}

                </Dropdown>
            </Label>
            {meta.touched && meta.error ? (
                <ErrorLabel className="error">{meta.error}</ErrorLabel>
            ) : null}
        </FormField>
    )
}
