import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import * as tiIcon from 'react-icons/ti';
import ApiLink from '../../rest api/ApiLink';
import Loader from '../Loader/Loader';
import AddSocialMedia from './AddSocialMedia';
import SocialMediaTable from './SocialMediaTable';

export default function SocialMediaContainer() {
    // eslint-disable-next-line no-unused-vars
    const [socialMedias, setSocialmedias] = useState();
    // eslint-disable-next-line no-unused-vars
    const [apiFailure, setApiFailure] = useState(true);
    const [reRender, setRerender] = useState(false);
    // Rerender handler
    const onChangeRender = () => {
        setRerender(!reRender);
    };
    // add brand name modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        async function FetchData() {
            await axios
                .get(ApiLink.getAllSocialMedia)
                .then((response) => {
                    if (response.status === 200) {
                        setSocialmedias(response.data);
                        setApiFailure(false);
                    } else {
                        setApiFailure(true);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        FetchData();
    }, [reRender]);
    return (
        <>
            <Button variant="primary" onClick={handleShow} className="mb-2">
                <tiIcon.TiEdit /> Add / Change Social Media
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Social Media</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddSocialMedia onChangeRender={onChangeRender} />
                </Modal.Body>
                <Modal.Footer />
            </Modal>
            {apiFailure === false ? <SocialMediaTable socialMedias={socialMedias} /> : <Loader />}
        </>
    );
}
