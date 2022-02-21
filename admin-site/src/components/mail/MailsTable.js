import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as grICon from 'react-icons/gr';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ApiLink from '../../rest api/ApiLink';
import MailReader from './MailReader';

export default function MailsTable({ mails, onChangeRender }) {
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState();
    // tostify
    const failed = () =>
        toast.error('Something went wrong! Try again', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    // modal
    const handleClose = () => {
        setShow(false);
        onChangeRender();
    };

    const viewMsg = (row) => {
        setMsg(row);
        if (row.status === 1) {
            setShow(true);
        } else {
            const bodyFormData = new FormData();
            bodyFormData.append('id', row.id);
            axios
                .post(ApiLink.readMail, bodyFormData)
                .then((response) => {
                    if (response.data === 1) {
                        setShow(true);
                    } else {
                        failed();
                    }
                })
                .catch((error) => {
                    failed();
                    console.log(error);
                });
        }
    };
    // table cell format
    const actions = (cell, row) => (
        <button
            type="button"
            className="btn btn-primary btn-sm"
            title="View"
            onClick={viewMsg.bind(this, row)}
        >
            <grICon.GrView />
        </button>
    );
    const msgCell = (cell) => {
        if (cell.length > 20) {
            return `${cell.substring(0, 20)}............`;
        }
        return cell;
    };
    const statusCell = (cell) => {
        if (cell === 0) {
            return (
                <button type="button" className="btn btn-sm btn-primary" disabled>
                    Unread
                </button>
            );
        }
        return (
            <button type="button" className="btn btn-secondary btn-sm" disabled>
                Read
            </button>
        );
    };
    const columns = [
        {
            dataField: 'id',
            text: '#',
        },
        {
            dataField: 'email',
            text: 'Email Number',
        },
        {
            dataField: 'message',
            text: 'Message',
            formatter: msgCell,
        },
        {
            dataField: 'date',
            text: 'Date',
        },
        {
            dataField: 'status',
            text: 'Reading Status',
            formatter: statusCell,
        },
        {
            dataField: '',
            text: 'View',
            formatter: actions,
        },
    ];
    if (mails.length > 0) {
        return (
            <>
                <BootstrapTable
                    keyField="id"
                    data={mails}
                    columns={columns}
                    pagination={paginationFactory()}
                />
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <MailReader msg={msg} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* toastify msg */}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </>
        );
    }
    return (
        <Container className="bg-info text-center">
            <p>No data found</p>
        </Container>
    );
}
