import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import * as tiIcon from 'react-icons/ti';
import ApiLink from '../../rest api/ApiLink';
import Loader from '../Loader/Loader';
import AddProduct from './AddProduct';
import ProductsTable from './ProductsTable';

export default function ProductsContainer() {
    const [reRender, setRerender] = useState(false);
    const onChangeRender = () => {
        setRerender(!reRender);
    };
    // add brand name modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // service data fetching
    const [products, setProducts] = useState('');
    const [apiFailure, setApiFailure] = useState(true);
    useEffect(() => {
        async function FetchData() {
            await axios
                .get(ApiLink.getAllProducts)
                .then((response) => {
                    if (response.status === 200) {
                        setProducts(response.data);
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
                <tiIcon.TiEdit /> Add Products
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddProduct onChangeRender={onChangeRender} />
                </Modal.Body>
                <Modal.Footer />
            </Modal>
            {apiFailure === false ? (
                <ProductsTable products={products} onChangeRender={onChangeRender} />
            ) : (
                <Loader />
            )}
        </>
    );
}
