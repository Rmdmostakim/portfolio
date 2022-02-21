import React from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';

export default function DropdownInput({ label, icon, fieldName, onChangeDataSave, children }) {
    // onchange handler
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        onChangeDataSave(name, value);
    };
    return (
        <Row className="mb-3">
            <Form.Group as={Col}>
                <Form.Label className="text-capitalize">{label}</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">{icon}</InputGroup.Text>
                    <Form.Select size="sm" name={fieldName} required onChange={onChangeHandler}>
                        {children}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Please choose a {label.toLowerCase()}.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        </Row>
    );
}
