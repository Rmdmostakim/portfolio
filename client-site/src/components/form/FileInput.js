import React from 'react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FileInput({ label, fieldName, onChangeDataSave }) {
    // input file handler
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
    const fileHandler = (event) => {
        const { name, files } = event.target;

        const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(files[0].name)) {
            iemptyInput();
        } else {
            onChangeDataSave(name, files[0]);
        }
    };
    return (
        <>
            <Row className="mb-3">
                <Form.Group as={Col} md="4">
                    <Form.Label className="text-capitalize">{label}</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="file"
                            size="sm"
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={fileHandler}
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
