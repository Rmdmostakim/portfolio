import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

export default function SaveButton({ title }) {
    return (
        <Row>
            <Col className="d-grid gap-2" md="4">
                <Button type="submit" size="lg">
                    {title}
                </Button>
            </Col>
        </Row>
    );
}
