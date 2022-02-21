import React from 'react';
import { Container, Table } from 'react-bootstrap';

export default function BrandnameTable({ brandName }) {
    if (brandName.length > 0) {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Brandname</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{brandName}</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
    return (
        <Container className="bg-info text-center">
            <p>No data found</p>
        </Container>
    );
}
