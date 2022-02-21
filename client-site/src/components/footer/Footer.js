import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import * as aiIcon from 'react-icons/ai';
import Classes from '../../assets/css/Footer.module.css';
import ApiLink from '../../rest api/ApiLink';
import Loader from '../Loader/Loader';
import PersonalContacts from './PersonalContacts';
import SocialMedia from './SocialMedia';

export default function Footer() {
    const [socialMedia, setSocialMedia] = useState();
    const [aspiFailure, setApiFailure] = useState(true);

    useEffect(() => {
        async function dataFetch() {
            await axios.get(ApiLink.getAllSocialMedia).then((response) => {
                if (response.status === 200) {
                    setSocialMedia(response.data);
                    setApiFailure(false);
                }
            });
        }
        dataFetch();
    }, []);
    if (aspiFailure === false) {
        return (
            <Container fluid className="bg-dark mt-5 text-white rounded">
                <Container className={Classes.footer}>
                    <Row className="justify-content-md-center">
                        <Col md={4} className="mb-3">
                            <h2>Follow Me</h2>
                            {socialMedia.map((data) => (
                                <SocialMedia data={data} key={Math.random()} />
                            ))}
                        </Col>
                        <Col md={{ span: 4, offset: 4 }} className="mb-3">
                            <h2>Contacts</h2>
                            {socialMedia.map((data) => (
                                <PersonalContacts data={data} key={Math.random()} />
                            ))}
                        </Col>
                    </Row>
                </Container>
                <h6 className="text-white font-monospace text-center">
                    <aiIcon.AiFillCopyrightCircle />
                    reserved by rmdmostakim
                </h6>
            </Container>
        );
    }
    return <Loader />;
}
