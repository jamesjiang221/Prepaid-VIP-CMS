import React from 'react';
import { Container, Form, Table, Button } from 'react-bootstrap';

export default function clientInput(){
    return (
        <Container>
            <div className="new-client-form">
                <h1>New Client</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="ClientName">
                        <Form.Label>Client Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ClientPhone">
                        <Form.Label>Client Phone</Form.Label>
                        <Form.Control type="number" placeholder="Enter Phone Number" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    )
}
