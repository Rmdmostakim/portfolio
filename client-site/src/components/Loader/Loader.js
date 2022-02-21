import React from 'react';
import { Button, Container, Spinner } from 'react-bootstrap';

export default function Loader() {
    return (
        <Container className="d-grid gap-2 mb-3">
            <Button variant="danger" disabled>
                <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                Loading...
            </Button>
        </Container>
    );
}
