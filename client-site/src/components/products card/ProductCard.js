import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';

export default function ProductCard({ data }) {
    const featureList = (feature) => (
        <ListGroup.Item key={Math.random()}>
            <ul>
                <li>{feature}</li>
            </ul>
        </ListGroup.Item>
    );
    const { features } = data;
    const feature = features.split(';').map(featureList);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body className="text-dark">
                <Card.Title
                    className="text-center"
                    style={{ fontWeight: 'bold', fontSize: '1.4rem' }}
                >
                    {data.name}
                </Card.Title>
                <h4 style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Features</h4>
                <ListGroup variant="flush">{feature}</ListGroup>
                <Button variant="primary">Repository Link</Button>
            </Card.Body>
        </Card>
    );
}
