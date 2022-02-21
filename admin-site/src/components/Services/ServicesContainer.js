import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import * as tiIcon from 'react-icons/ti';
import ApiLink from '../../rest api/ApiLink';
import Loader from '../Loader/Loader';
import AddServices from './AddServices';
import ServicesTable from './ServicesTable';

export default function ServicesContainer() {
    const [reRender, setRerender] = useState(false);
    const onChangeRender = () => {
        setRerender(!reRender);
    };
    // add brand name modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // service data fetching
    const [services, setService] = useState('');
    const [apiFailure, setApiFailure] = useState(true);
    useEffect(() => {
        async function FetchData() {
            await axios
                .get(ApiLink.getAllServices)
                .then((response) => {
                    if (response.status === 200) {
                        setService(response.data);
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
                <tiIcon.TiEdit /> Add Services
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddServices onChangeRender={onChangeRender} />
                </Modal.Body>
                <Modal.Footer />
            </Modal>
            {apiFailure === false ? (
                <ServicesTable services={services} onChangeRender={onChangeRender} />
            ) : (
                <Loader />
            )}
        </>
    );
}
