import React from 'react'
import { useField, Form, FormikProps, Formik } from 'formik';
import { Input } from '../StyledComponents/Input';
import InputComponent from './InputComponent';
import { Label } from '../StyledComponents/Label';
import { FormField } from '../StyledComponents/FormField';


export default function CheckboxComponent({ label, ...props }) {
    const [field, meta, helpers] = useField(props);


    if (Array.isArray(meta.initialValue)){
        return (
            <div>
                <label htmlFor={label}>{label}</label>
                <input type="checkbox" {...field} {...props} value={label} />
            </div>
        )
    }
    else{
        return (
            <div>
                <label htmlFor={label}>{label}
                    <input type="checkbox" {...field} {...props}/>
                </label>
            </div>
        )
    }

}
