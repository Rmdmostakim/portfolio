import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import * as imIcon from 'react-icons/im';
import * as ioIcon from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiLink from '../../rest api/ApiLink';
import DropdownInput from '../form/DropdownInput';
import SaveButton from '../form/SaveButton';
import TextInput from '../form/TextInput';
// eslint-disable-next-line no-unused-vars
export default function AddSocialMedia({ onChangeRender }) {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({ medianame: '', link: '' });
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
    const failed = (msg) =>
        toast.error(msg, {
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
        } else if (form.checkValidity() === true) {
            if (formData.medianame === '' || formData.medianame === 'Select One') {
                failed('Please select valid Name!');
            } else {
                const bodyFormData = new FormData();
                bodyFormData.append('medianame', formData.medianame);
                bodyFormData.append('link', formData.link);
                axios
                    .post(ApiLink.addSocialMedia, bodyFormData)
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
        }
        setValidated(true);
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <DropdownInput
                    label="Select Social Media"
                    fieldName="medianame"
                    icon={<ioIcon.IoShareSocialSharp />}
                    onChangeDataSave={onChangeDataSave}
                >
                    <option>Select One</option>
                    <option value="facebook">Facebook</option>
                    <option value="whatsapp">Whatsapp</option>
                    <option value="linkedin">Linkedin</option>
                    <option value="github">Github</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                </DropdownInput>
                <TextInput
                    label="Link"
                    fieldName="link"
                    placeholder="Enter link/number"
                    icon={<imIcon.ImLink />}
                    onChangeDataSave={onChangeDataSave}
                    textValue={formData.link}
                />
                <SaveButton title="Add Social Media" />
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
