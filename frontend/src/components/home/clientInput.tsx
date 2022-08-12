import React, { useState } from 'react';
import { Container, Form, Table, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    clientName: Yup.string().required('Please type a client name'),
    clientPhone: Yup.string().required('Please input a client phone number'),
});

// const submitHandler = async (values: )

export default function clientInput(){
    // const [validated, setValidated] = useState(false);

    // const handleSubmit = (event: any) => {
    //     const 
    // }

    return (
        <Container>
            <div className="new-client-form">
                <h1>New Client</h1>

                <Formik
                    validationSchema = {schema}
                    onSubmit = {console.log}
                    initialValues = {{
                        clientName: '',
                        clientPhone: '',
                    }}
                >
                {({
                    handleSubmit,
                    handleChange,
                    values,
                    errors,
                    isValid,
                }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="ClientName">
                            <Form.Label>Client Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="clientName" 
                                value={values.clientName} 
                                onChange={handleChange}
                                placeholder="Enter Name"
                                isInvalid={!!errors.clientName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.clientName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="ClientPhone">
                            <Form.Label>Client Phone</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="clientPhone" 
                                value={values.clientPhone} 
                                onChange={handleChange}
                                placeholder="Enter Phone Number"
                                isInvalid={!!errors.clientPhone}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.clientPhone}
                            </Form.Control.Feedback>
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                )}
                </Formik>
            </div>
        </Container>
    )
}
