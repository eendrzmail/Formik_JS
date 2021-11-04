import React from 'react'
import { useField } from 'formik';
import { Label } from '../StyledComponents/Label'
import { ErrorLabel } from '../StyledComponents/ErrorLabel'
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from "react-datepicker";
import pl from 'date-fns/locale/pl'
registerLocale("pl", pl)

export default function ReactDatePickerComponent({ label, ...props }) {
    const [field, meta, helpers] = useField(props)
    // const [startDate, setStartDate] = useState(field.value);

    return (
        <div>
            <DatePicker
                dateFormat="dd-MM-yyyy"
                selected={field.value}
                value={field.value}

                onChange={(date) => {
                    helpers.setValue(date)
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
