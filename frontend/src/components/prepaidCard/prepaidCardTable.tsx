import React from 'react';

import { Container, Table, Button } from 'react-bootstrap';

export default function prepaidCardTable() {
    return (
        <Container>
            <div className="prepaid-card-table">
                <h1>Prepaid Clients</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Client Name</th>
                            <th>Prepaid Amount</th>
                            <th>Tip Included?</th>
                            <th>Prepaid Balance</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Placeholder</td>
                            <td>PrepaidAmountHolder</td>
                            <td>YesNoPlaceholder</td>
                            <td>Placeholder</td>
                            <td>
                                <Button variant="primary" id="editButton">Edit</Button>
                                <Button variant="danger" id="deleteButton">Delete</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <div>
                    <p>Popup window for editing</p>
                </div>
            </div>
        </Container>
    )
}