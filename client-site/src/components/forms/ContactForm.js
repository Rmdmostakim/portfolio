import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Classes from '../../assets/css/ContactForm.module.css';
import rocket from '../../assets/images/rocket.png';
import Jumbotron from '../jumbotron/Jumbotron';

function ContactForm() {
    return (
        <Container className={Classes.contactForm}>
            <div className={Classes.contactImage}>
                <img src={rocket} alt="rocket" />
            </div>
            <div>
                <h3>Drop Me A Message</h3>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Label className="text-dark">
                        <strong>Name</strong>
                    </Form.Label>
                    <Form.Control className="shadow-none" type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label className="text-dark">
                        <strong>Email</strong>
                    </Form.Label>
                    <Form.Control
                        type="email"
                        className="shadow-none"
                        placeholder="example@example.com"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Message">
                    <Form.Label className="text-dark">
                        <strong>Message</strong>
                    </Form.Label>
                    <Form.Control className="shadow-none" as="textarea" rows={3} />
                </Form.Group>
                <div className="d-grid gap-2 pb-5">
                    <Button variant="danger" size="lg">
                        Send Message
                    </Button>
                </div>
            </Form>
        </Container>
    );
}
export default Jumbotron(ContactForm);
