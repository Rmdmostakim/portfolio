import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function ServiceCard({ data }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body className="text-dark">
                <Card.Title className="text-center d-grid gap-2">
                    <Button variant="primary" size="sm">
                        {data.title}
                    </Button>
                </Card.Title>
                <Card.Text className="text-justify">{data.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}
