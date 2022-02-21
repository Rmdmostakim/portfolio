import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import * as tiIcon from 'react-icons/ti';
import ApiLink from '../../rest api/ApiLink';
import Loader from '../Loader/Loader';
import AddBrandname from './AddBrandname';
import BrandnameTable from './BrandnameTable';

export default function BrandnameContainer() {
    const [reRender, setRerender] = useState(false);
    const onChangeRender = () => {
        setRerender(!reRender);
    };
    // add brand name modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // brandname table data fetch
    const [brandName, setBrandname] = useState('');
    const [apiFailure, setApiFailure] = useState(true);
    useEffect(() => {
        async function FetchData() {
            await axios
                .get(ApiLink.getBrandName)
                .then((response) => {
                    if (response.status === 200) {
                        setBrandname(response.data);
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
                <tiIcon.TiEdit /> Add / Change Brandname
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Brandname</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddBrandname onChangeRender={onChangeRender} />
                </Modal.Body>
                <Modal.Footer />
            </Modal>
            {apiFailure === false ? <BrandnameTable brandName={brandName} /> : <Loader />}
        </>
    );
}
