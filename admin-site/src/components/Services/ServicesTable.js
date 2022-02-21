import React, { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as aiIcon from 'react-icons/ai';
import * as biIcon from 'react-icons/bi';
import * as mdIcon from 'react-icons/md';
import DeleteService from './DeleteService';
import EditServices from './EditServices';

export default function ServicesTable({ services, onChangeRender }) {
    const [editorData, setEditorData] = useState({ id: '', title: '', description: '' });
    const [deleteId, setDeleteId] = useState({ id: '' });
    // edit modal
    const [editShow, setEditShow] = useState(false);
    const handleCloseEdit = () => setEditShow(false);
    const handleEditShow = (rowData) => {
        setEditShow(true);
        setEditorData({
            ...editorData,
            id: rowData.id,
            title: rowData.title,
            description: rowData.description,
        });
    };
    // delete modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleCloseDelete = () => setDeleteShow(false);
    const handleShowDelete = (rowData) => {
        setDeleteShow(true);
        setDeleteId({ id: rowData.id });
    };
    // table cell format
    const cellImg = (cell) => <img className="w-50" src={cell} alt={cell} />;
    const descriptionCell = (cell) => {
        if (cell.length > 100) {
            return `${cell.substring(0, 100)}............`;
        }
        return cell;
    };
    const actions = (cell, row) => (
        <>
            <button
                type="button"
                className="btn btn-primary btn-sm"
                title="Edit"
                onClick={handleEditShow.bind(this, row)}
            >
                <biIcon.BiEdit />
            </button>
            <aiIcon.AiOutlinePause />
            <button
                type="button"
                className="btn btn-danger btn-sm"
                title="Delete"
                onClick={handleShowDelete.bind(this, row)}
            >
                <mdIcon.MdDelete />
            </button>
        </>
    );
    const columns = [
        {
            dataField: 'id',
            text: '#',
        },
        {
            dataField: 'image',
            text: 'Photo',
            formatter: cellImg,
        },
        {
            dataField: 'title',
            text: 'Service Title',
        },
        {
            dataField: 'description',
            text: 'Service Description',
            formatter: descriptionCell,
        },
        {
            dataField: '',
            text: 'Action',
            formatter: actions,
        },
    ];
    if (services.length > 0) {
        return (
            <>
                <BootstrapTable
                    keyField="id"
                    data={services}
                    columns={columns}
                    pagination={paginationFactory()}
                />

                <Modal show={editShow} onHide={handleCloseEdit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Service</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditServices onChangeRender={onChangeRender} editorData={editorData} />
                    </Modal.Body>
                    <Modal.Footer />
                </Modal>

                <Modal show={deleteShow} onHide={handleCloseDelete}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Service?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DeleteService
                            onChangeRender={onChangeRender}
                            deleteId={deleteId}
                            handleCloseDelete={handleCloseDelete}
                        />
                    </Modal.Body>
                    <Modal.Footer />
                </Modal>
            </>
        );
    }
    return (
        <Container className="bg-info text-center">
            <p>No data found</p>
        </Container>
    );
}
