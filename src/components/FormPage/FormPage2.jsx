import { useField, Form, FormikProps, Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup'

import './FormPage.css'
import { Button } from '../StyledComponents/Button';
import { Section } from '../StyledComponents/Section';

import InputComponent from '../FormComponents/InputComponent';
import DropdownComponent from '../FormComponents/DropdownComponent';
import DatePickerComponent from '../FormComponents/DatePickerComponent';
import ReactDatePickerComponent from '../FormComponents/ReactDatePickerComponent';
import CheckboxComponent from '../FormComponents/CheckboxComponent';

export default function FormPage2() {

    return (
        <Section>

            <Formik
                enableReinitialize={true}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                    role: "User",
                    date: '',
                    rectDatePicker: '',
                    toggle: false,
                    checked: []
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
                    role: Yup.string()
                        .required(),
                    date: Yup.date()
                        .required("Required")
                })}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 100));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ values, setFieldValue }) => (

                    <Form className="registerForm">
                        <div className="spacer">Register</div>

                        <InputComponent name="firstName" type="text" label="First Name" />

                        <InputComponent name="lastName" type="text" label="Last Name" />

                        <InputComponent name="email" type="text" label="Email" />

                        <InputComponent name="password" type="password" label="Password" />

                        <InputComponent name="confirmPassword" type="confirmPassword" label="Confirm Password" />

                        <DropdownComponent name="role" label="Role" optionArray={["Admin", "User"]}></DropdownComponent>

                        <DatePickerComponent name="date" label="Date"></DatePickerComponent>

                        <ReactDatePickerComponent label="React Datepicker" name="rectDatePicker"></ReactDatePickerComponent>


                        <CheckboxComponent label="Togglebox" name="toggle"></CheckboxComponent>

                        <hr/>

                        <CheckboxComponent label="A" name="checked"></CheckboxComponent>
                        <CheckboxComponent label="B" name="checked"></CheckboxComponent>
                        <CheckboxComponent label="C" name="checked"></CheckboxComponent>

                        <Button type="submit">Login</Button>

                        <pre>
                            {JSON.stringify(values, null, 2)}
                        </pre>

                    </Form>
                )}

            </Formik>
        </Section>
    )
}
