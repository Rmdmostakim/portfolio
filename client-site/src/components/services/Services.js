import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Classes from '../../assets/css/HomeServices.module.css';
import ApiLink from '../../rest api/ApiLink';
import Jumbotron from '../jumbotron/Jumbotron';
import Loader from '../Loader/Loader';
import ServiceCard from './ServiceCard';

const title = <h4 className={Classes.serviceTitle}>Featured Services</h4>;
function Services() {
    const [services, setServices] = useState();
    const [apiFailure, setApiFailure] = useState(true);

    useEffect(() => {
        async function fetchData() {
            await axios
                .get(ApiLink.getAllServices)
                .then((response) => {
                    if (response.status === 200) {
                        setServices(response.data);
                        setApiFailure(false);
                    } else {
                        setApiFailure(true);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setApiFailure(true);
                });
        }
        fetchData();
    }, []);
    if (apiFailure === false) {
        if (services.length > 0) {
            return (
                <Row className="justify-content-md-center">
                    {services.map((data) => (
                        <Col md="3" className="mb-3" key={Math.random()}>
                            <ServiceCard data={data} />
                        </Col>
                    ))}
                </Row>
            );
        }
        return <p>No data found !</p>;
    }
    return <Loader />;
}
export default Jumbotron(Services, title);
