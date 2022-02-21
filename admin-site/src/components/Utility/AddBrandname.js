import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import * as faIcon from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiLink from '../../rest api/ApiLink';
import SaveButton from '../form/SaveButton';
import TextInput from '../form/TextInput';

export default function AddBrandname({ onChangeRender }) {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({ brandName: '' });
    // todtify msg
    // eslint-disable-next-line no-unused-vars
    const success = () =>
        toast.success('Brandname added succesfully!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    // eslint-disable-next-line no-unused-vars
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
    // onChange DataSaving
    const onChangeDataSave = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };
    // on save/submit handler
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const bodyFormData = new FormData();
            bodyFormData.append('brandName', formData.brandName);
            axios
                .post(ApiLink.addBrandname, bodyFormData)
                .then((response) => {
                    if (response.data === 1) {
                        setTimeout(success(), 5000);
                        onChangeRender();
                    } else {
                        failed();
                    }
                })
                .catch((error) => {
                    failed();
                    console.log(error);
                });
        }
        setValidated(true);
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <TextInput
                    label="Brandname"
                    fieldName="brandName"
                    placeholder="Enter brandname"
                    icon={<faIcon.FaBold />}
                    onChangeDataSave={onChangeDataSave}
                    textValue={formData.brandName}
                />
                <SaveButton title="Add Brandname" />
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
