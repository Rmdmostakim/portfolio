import React from 'react';
import { Container } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

export default function SocialMediaTable({ socialMedias }) {
    const columns = [
        {
            dataField: 'id',
            text: '#',
        },
        {
            dataField: 'medianame',
            text: 'Socialmedia Name',
        },
        {
            dataField: 'link',
            text: 'Link',
        },
    ];
    if (socialMedias.length > 0) {
        return <BootstrapTable keyField="id" data={socialMedias} columns={columns} />;
    }
    return (
        <Container className="bg-info text-center">
            <p>No data found</p>
        </Container>
    );
}
