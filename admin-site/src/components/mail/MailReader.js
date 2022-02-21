import React from 'react';

export default function MailReader({ msg }) {
    return (
        <div>
            <h6 style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                <span>From: </span>
                {msg.email}
            </h6>
            <p style={{ fontWeight: 'bold', fontSize: '0.8rem' }}>Date: {msg.date}</p>
            <p>{msg.message}</p>
        </div>
    );
}
