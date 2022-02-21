import { Col, Row } from 'react-bootstrap';

export default function FilePreview({ url }) {
    if (url.length !== 0) {
        return (
            <Row className="mb-3 text-center">
                <Col className="bg-light rounded p-2">
                    <img src={URL.createObjectURL(url)} alt="Preview" className="w-50" />
                </Col>
            </Row>
        );
    }
    return null;
}
