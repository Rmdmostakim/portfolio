import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ApiLink from '../../rest api/ApiLink';
import Jumbotron from '../jumbotron/Jumbotron';
import Loader from '../Loader/Loader';
import ProductCard from '../products card/ProductCard';

function Products() {
    const [products, setProducts] = useState();
    const [apiFailure, setApiFailure] = useState(true);

    useEffect(() => {
        async function dataFetch() {
            await axios
                .get(ApiLink.getAllProducts)
                .then((response) => {
                    if (response.status === 200) {
                        setProducts(response.data);
                        setApiFailure(false);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        dataFetch();
    }, []);
    if (apiFailure === false) {
        if (products.length > 0) {
            return (
                <Row className="justify-content-md-center">
                    {products.map((data) => (
                        <Col md="2" className="mb-3" key={Math.random()}>
                            <ProductCard data={data} />
                        </Col>
                    ))}
                </Row>
            );
        }
        return <p>No data found !</p>;
    }
    return <Loader />;
}
export default Jumbotron(Products);
