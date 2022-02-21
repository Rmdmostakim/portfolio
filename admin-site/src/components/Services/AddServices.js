import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import * as biIcon from 'react-icons/bi';
import * as giIcon from 'react-icons/gi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiLink from '../../rest api/ApiLink';
import FileInput from '../form/FileInput';
import FilePreview from '../form/FilePreview';
import SaveButton from '../form/SaveButton';
import TextareaInput from '../form/TextareaInput';
import TextInput from '../form/TextInput';

export default function AddServices({ onChangeRender }) {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({ title: '', description: '', image: [] });
    // todtify msg
    const success = () =>
        toast.success('Service added succesfully!', {
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
            bodyFormData.append('title', formData.title);
            bodyFormData.append('description', formData.description);
            bodyFormData.append('image', formData.image);
            axios
                .post(ApiLink.addService, bodyFormData)
                .then((response) => {
                    if (response.data === 1) {
                        success();
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
                    label="Service Title"
                    fieldName="title"
                    placeholder="Enter service title"
                    icon={<biIcon.BiText />}
                    onChangeDataSave={onChangeDataSave}
                    textValue={formData.title}
                />
                <TextareaInput
                    label="Description"
                    fieldName="description"
                    placeholder="Enter service descriptions"
                    icon={<giIcon.GiNotebook />}
                    onChangeDataSave={onChangeDataSave}
                    textAreaValue={formData.description}
                />
                <FilePreview url={formData.image} />
                <FileInput
                    label="Upload Photo"
                    fieldName="image"
                    onChangeDataSave={onChangeDataSave}
                    required
                />
                <SaveButton title="Add Service" />
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
