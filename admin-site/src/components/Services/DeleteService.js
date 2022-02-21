import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiLink from '../../rest api/ApiLink';
import SaveButton from '../form/SaveButton';

export default function DeleteService({ onChangeRender, deleteId, handleCloseDelete }) {
    const [validated, setValidated] = useState(false);
    // todtify msg
    const success = () =>
        toast.success('Deleted succesfully!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    const failed = () =>
        toast.error('Something went wrong! Try again', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    // on save/submit handler
    const handleSubmit = (event) => {
        event.preventDefault();
        setValidated(true);
        const bodyFormData = new FormData();
        bodyFormData.append('id', deleteId.id);
        axios
            .post(ApiLink.deleteService, bodyFormData)
            .then((response) => {
                if (response.data === 1) {
                    success();
                    handleCloseDelete();
                    onChangeRender();
                } else {
                    failed();
                }
            })
            .catch((error) => {
                failed();
                console.log(error);
            });
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h3 className="text-danger text-center font-weight-bold">
                    Are you sure to delete?
                </h3>
                <SaveButton title="Confirm Delete" />
            </Form>
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
