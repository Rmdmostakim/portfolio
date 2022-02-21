import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Jumbotron from '../jumbotron/Jumbotron';
import ResumeItem from './ResumeItem';

function Resume() {
    return (
        <Container>
            <Row>
                <ResumeItem />
                <ResumeItem />
                <ResumeItem />
                <ResumeItem />
            </Row>
        </Container>
    );
}
export default Jumbotron(Resume);
