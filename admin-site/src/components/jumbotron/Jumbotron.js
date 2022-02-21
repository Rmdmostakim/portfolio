import React from 'react';
import { Container } from 'react-bootstrap';
import Classes from '../../assets/css/Jumbotron.module.css';

const Jumbotron = (OriginalComponent, title = '') => {
    class newComponent extends React.PureComponent {
        render() {
            return (
                <Container className={Classes.jumbotron}>
                    {title}
                    <div className="mt-4 p-4 bg-light text-dark rounded">
                        <OriginalComponent />
                    </div>
                </Container>
            );
        }
    }
    return newComponent;
};
export default Jumbotron;
