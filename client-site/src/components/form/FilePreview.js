import { Col, Row } from 'react-bootstrap';

export default function FilePreview({ url }) {
    if (url !== '') {
        return (
            <Row className="mb-3 text-center" md="3">
                <Col className="bg-light rounded p-2">
                    <img src={url} alt="Preview" className="w-50" />
                </Col>
            </Row>
        );
    }
    return null;
}
