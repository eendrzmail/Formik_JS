import React from 'react'
import { useField, Form, FormikProps, Formik } from 'formik';
import { Label } from '../StyledComponents/Label'
import { ErrorLabel } from '../StyledComponents/ErrorLabel'
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from "react-datepicker";
import pl from 'date-fns/locale/pl'



export default function ReactDatePickerComponent({ label, ...props }) {
    registerLocale("pl", pl)
    const [field, meta, helpers] = useField(props)
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <DatePicker
                dateFormat="dd-MM-yyyy"
                selected={startDate}
                value={startDate}

                onChange={(date) => {
                    setStartDate(date)
                    helpers.setValue(date.toISOString().split('T')[0])
                }}

            />
            <Label>
                {label}
            </Label>
            {meta.touched && meta.error ? (
                <ErrorLabel className="error">{meta.error}</ErrorLabel>
            ) : null}

        </div>
    )
}
