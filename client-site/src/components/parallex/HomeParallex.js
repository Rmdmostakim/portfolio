import { Col, Row } from 'react-bootstrap';
import Classes from '../../assets/css/HomeParallex.module.css';
import person from '../../assets/images/man2.png';
import Jumbotron from '../jumbotron/Jumbotron';

function HomeParallex() {
    console.log('Home parallex...');
    return (
        <Row className="justify-content-md-center">
            <Col md={{ span: 4, offset: 2 }}>
                <h2 className={Classes.parallexTitle}> Md Mostakim Rahman</h2>
                <h4 className={Classes.parallexSubTitle}>Web Developer (Laravel and React)</h4>
            </Col>
            <Col md={4}>
                <div className={Classes.parallexImageSection}>
                    <img src={person} alt="person" />
                </div>
            </Col>
        </Row>
    );
}
export default Jumbotron(HomeParallex);
