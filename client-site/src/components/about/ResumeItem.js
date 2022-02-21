import React from 'react';
import { Col } from 'react-bootstrap';
import * as aiIcon from 'react-icons/ai';
import Classes from '../../assets/css/ResumeItem.module.css';

export default function ResumeItem() {
    return (
        <Col md="6" className="mb-3">
            <div className={Classes.resumeItem}>
                <span className={Classes.date}>
                    <span className={Classes.calendarIcon}>
                        <aiIcon.AiTwotoneCalendar />
                    </span>
                    March 2013 - Present
                </span>
                <h3>Masteral in Information Technology</h3>
                <p>
                    Even the all-powerful Pointing has no control about the blind texts it is an
                    almost unorthographic.
                </p>
                <span className={Classes.school}>New York University</span>
            </div>
        </Col>
    );
}
