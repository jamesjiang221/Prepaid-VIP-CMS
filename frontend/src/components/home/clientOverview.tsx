import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

export default function clientOverview() {
    return (
        <Container>
            <div className="client-table">
                <h1>Client List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Client Name</th>
                            <th>Client Phone</th>
                            <th>VIP Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>NamePlaceHolder</td>
                            <td>PhonePlaceHolder</td>
                            <td>VIPTypePlaceHolder</td>
                            <td>
                                <Button variant="primary" id="editButton">Edit</Button>
                                <Button variant="danger" id="deleteButton">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}