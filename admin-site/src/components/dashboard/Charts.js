import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LineCharts from './LineCharts';

export default function Charts() {
    return (
        <Row className="mt-3 border border-primary rounded">
            <Col md={12}>
                <LineCharts />
            </Col>
        </Row>
    );
}
