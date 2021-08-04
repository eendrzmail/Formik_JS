import React from 'react'
import { useFormik } from 'formik'

import './FormPage.css'
import { FormField } from '../FormComponents/FormField'
import { Input } from '../FormComponents/Input'
import { ErrorLabel } from '../FormComponents/ErrorLabel'
import { Label } from '../FormComponents/Label'
import { Dropdown } from '../FormComponents/Dropdown'
import { Button } from '../FormComponents/Button'

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required';
    } else if (values.password !== values.confirmPassword) {
        errors.passwordMatch = 'Password not match';
    }

    return errors;
};

export default function FormPage() {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
            email: '',
            role: "User",
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <section className="FormPage1">
            <form onSubmit={formik.handleSubmit} className="registerForm">
                <div className="spacer">Register</div>

                <FormField>
                    <Label htmlFor="firstName">First Name
                        <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            placeholder="First Name"
                        />
                    </Label>
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <ErrorLabel>{formik.errors.firstName}</ErrorLabel>
                    ) : null}
                </FormField>

                <FormField>
                    <Label htmlFor="lastName">Last Name
                        <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            placeholder="Last Name"
                        />
                    </Label>
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <ErrorLabel>{formik.errors.lastName}</ErrorLabel>
                    ) : null}
                </FormField>

                <FormField>
                    <Label htmlFor="email">Email Address
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="Email"
                        />
                    </Label>
                    {formik.touched.email && formik.errors.email ? (
                        <ErrorLabel>{formik.errors.email}</ErrorLabel>
                    ) : null}

                </FormField>

                <FormField>
                    <Label htmlFor="password">Password
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            placeholder="Password"
                        />
                    </Label>
                    {formik.touched.password && formik.errors.password ? (
                        <ErrorLabel>{formik.errors.password}</ErrorLabel>
                    ) : null}
                </FormField>


                <FormField>
                    <Label htmlFor="confirmPassword">Confirm Password
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                            placeholder="Confirm Password"
                        />
                    </Label>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <ErrorLabel>{formik.errors.confirmPassword}</ErrorLabel>
                    ) : null}

                    {formik.touched.confirmPassword && formik.errors.passwordMatch ? (
                        <ErrorLabel>{formik.errors.passwordMatch}</ErrorLabel>
                    ) : null}
                </FormField>

                <FormField>
                    <Label>Role
                        <Dropdown
                            id="role"
                            name="role"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option>Admin</option>
                            <option selected>User</option>
                        </Dropdown>
                    </Label>
                </FormField>


                <Button type="submit">Login</Button>
            </form>
        </section>
    )
}
