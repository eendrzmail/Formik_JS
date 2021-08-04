import { useField, Form, FormikProps, Formik } from 'formik';
import React from 'react'
import InputComponent from '../FormComponents/InputComponent';
import * as Yup from 'yup'

import './FormPage.css'
import { Dropdown } from '../FormComponents/Dropdown';
import { Label } from '../FormComponents/Label';
import { FormField } from '../FormComponents/FormField';
import { Button } from '../FormComponents/Button';
import { Section } from '../FormComponents/Section';
import DropdownComponent from '../FormComponents/DropdownComponent';
import DatePickerComponent from '../FormComponents/DatePickerComponent';

export default function FormPage2() {
    return (
        <Section>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                    role: "Admin",
                    date: ''
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, "15 characters or less")
                        .required('Required'),
                    lastName: Yup.string()
                        .max(15, "15 characters or less")
                        .required('Required'),
                    password: Yup.string()
                        .required('Required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], "Passwords must match")
                        .required('Required'),
                    email: Yup.string().email()
                        .required('Required'),
                    date: Yup.date()
                        .required("Required")
                })}     
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 100));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form className="registerForm">
                    <div className="spacer">Register</div>

                    <InputComponent name="firstName" type="text" label="firstName" />
                    
                    <InputComponent name="lastName" type="text" label="lastName" />
                    
                    <InputComponent name="email" type="text" label="email" />
                    
                    <InputComponent name="password" type="password" label="password" />

                    <InputComponent name="confirmPassword" type="confirmPassword" label="confirmPassword" />

                    <DropdownComponent name="role" label="Dole" optionArray={["Admin","User"]}></DropdownComponent>

                    <DatePickerComponent name="date" label = "Date"></DatePickerComponent>

                    <Button type="submit">Login</Button>

                </Form>

            </Formik>
        </Section>
    )
}
