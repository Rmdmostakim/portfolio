import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import * as giIcon from 'react-icons/gi';
import * as hiIcon from 'react-icons/hi';
import * as siIcon from 'react-icons/si';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiLink from '../../rest api/ApiLink';
import FileInput from '../form/FileInput';
import FilePreview from '../form/FilePreview';
import SaveButton from '../form/SaveButton';
import TextareaInput from '../form/TextareaInput';
import TextInput from '../form/TextInput';

export default function AddProduct({ onChangeRender }) {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({ name: '', features: '', link: '', image: [] });
    // todtify msg
    const success = () =>
        toast.success('Product added succesfully!', {
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
            bodyFormData.append('name', formData.name);
            bodyFormData.append('features', formData.features);
            bodyFormData.append('link', formData.link);
            bodyFormData.append('image', formData.image);
            axios
                .post(ApiLink.addProduct, bodyFormData)
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
                    label="Product Name"
                    fieldName="name"
                    placeholder="Enter product name "
                    icon={<siIcon.SiNamecheap />}
                    onChangeDataSave={onChangeDataSave}
                    textValue={formData.name}
                />
                <TextareaInput
                    label="Features"
                    fieldName="features"
                    placeholder="Enter product features"
                    icon={<giIcon.GiNotebook />}
                    onChangeDataSave={onChangeDataSave}
                    textAreaValue={formData.features}
                />
                <TextInput
                    label="Demo Link"
                    fieldName="link"
                    placeholder="Enter repository/demo link"
                    icon={<hiIcon.HiLink />}
                    onChangeDataSave={onChangeDataSave}
                    textValue={formData.link}
                />
                <FilePreview url={formData.image} />
                <FileInput
                    label="Upload Photo"
                    fieldName="image"
                    onChangeDataSave={onChangeDataSave}
                    required
                />
                <SaveButton title="Add Product" />
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
