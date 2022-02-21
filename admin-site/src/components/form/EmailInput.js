import React from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EmailInput({ label, icon, placeholder, fieldName, onChangeDataSave }) {
    // onchange handler
    // inputs error handlers
    const iemptyInput = () =>
        toast.error('Please provide valid data !', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        if (value == null || value === undefined || value === '' || value.trim().length === 0) {
            iemptyInput();
        } else {
            onChangeDataSave(name, value);
        }
    };
    return (
        <>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label className="text-capitalize">{label}</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">{icon}</InputGroup.Text>
                        <Form.Control
                            type="email"
                            placeholder={placeholder}
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={onChangeHandler}
                            name={fieldName}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a {label.toLowerCase()}.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            {/* toastify msg */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}
