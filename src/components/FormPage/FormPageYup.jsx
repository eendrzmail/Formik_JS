import React from 'react'
import { useFormik, useField } from "formik";
import * as Yup from 'yup'

import './FormPage.css'
import { FormField } from '../StyledComponents/FormField'
import { Input } from '../StyledComponents/Input'
import { ErrorLabel } from '../StyledComponents/ErrorLabel'
import { Label } from '../StyledComponents/Label'
import { Dropdown } from '../StyledComponents/Dropdown'
import { Button } from '../StyledComponents/Button'
import { Section } from '../StyledComponents/Section'

const MySpecialField = () => {
    const [field] = useField("testval");
  
    return <input {...field} className="border-2" />;
  };

export default function FormPageYup() {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
            email: '',
            role: "Admin",
            testval:''
        },
        validationSchema: Yup.object({
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
                .required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <Section>
            <form onSubmit={formik.handleSubmit} className="registerForm">
                <div className="spacer">Register</div>

                <FormField>
                    {/* <MySpecialField></MySpecialField> */}
                </FormField>

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
                            value={formik.values.role}
                        >
                            <option>Admin</option>
                            <option>User</option>
                        </Dropdown>
                    </Label>
                </FormField>


                <Button type="submit">Login</Button>
            </form>
        </Section>
    )
}
