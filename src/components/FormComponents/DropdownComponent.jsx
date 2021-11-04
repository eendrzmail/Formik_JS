import React from 'react'
import { useField, Form, FormikProps, Formik } from 'formik';
import { Label } from '../StyledComponents/Label'
import { ErrorLabel } from '../StyledComponents/ErrorLabel'
import { FormField } from '../StyledComponents/FormField';
import { Dropdown } from '../StyledComponents/Dropdown';

export default function DropdownComponent({ label, optionArray, ...props }) {
    const [field, meta, helpers] = useField(props);
    return (
        <FormField>
            <Label>
                {label}
                <Dropdown {...field} {...props}>
                    {optionArray.map(x => {
                        return <option key={x}>{x}</option>
                    })}

                </Dropdown>
            </Label>
            {meta.touched && meta.error ? (
                <ErrorLabel className="error">{meta.error}</ErrorLabel>
            ) : null}
        </FormField>
    )
}
