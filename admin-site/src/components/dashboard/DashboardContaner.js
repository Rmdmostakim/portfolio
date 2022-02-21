import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ApiLink from '../../rest api/ApiLink';
import Loader from '../Loader/Loader';
import Charts from './Charts';

export default function DashboardContaner() {
    // eslint-disable-next-line no-unused-vars
    const [dashboardData, setDashboardData] = useState();
    // eslint-disable-next-line no-unused-vars
    const [apiFailure, setApiFailure] = useState(true);
    useEffect(() => {
        async function fetchData() {
            await axios
                .get(ApiLink.getDashboardData)
                .then((response) => {
                    if (response.status === 200) {
                        setDashboardData(response.data);
                        setApiFailure(false);
                    } else {
                        setApiFailure(true);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        fetchData();
    }, []);
    if (apiFailure === false) {
        return (
            <>
                <Row className="justify-content-md-center">
                    {dashboardData.map((data) => (
                        <Col key={Math.random()} sm>
                            <Card
                                bg="primary"
                                key={Math.random()}
                                text="white"
                                style={{ width: '16rem' }}
                                className="mb-2"
                            >
                                <Card.Header>{data.title.toUpperCase()}</Card.Header>
                                <Card.Body>
                                    <Card.Title>{data.count} </Card.Title>
                                    <Card.Text>Total {data.title}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Charts />
            </>
        );
    }
    return <Loader />;
}
