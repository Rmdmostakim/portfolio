import React, { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import * as aiIcon from 'react-icons/ai';
import * as biIcon from 'react-icons/bi';
import * as mdIcon from 'react-icons/md';
import DeleteProduct from './DeleteProduct';
import EditProduct from './EditProduct';

export default function ProductsTable({ products, onChangeRender }) {
    const [editorData, setEditorData] = useState({ id: '', name: '', features: '', link: '' });
    const [deleteId, setDeleteId] = useState({ id: '' });
    // edit modal
    const [editShow, setEditShow] = useState(false);
    const handleCloseEdit = () => setEditShow(false);
    const handleEditShow = (rowData) => {
        setEditShow(true);
        setEditorData({
            ...editorData,
            id: rowData.id,
            name: rowData.name,
            features: rowData.features,
            link: rowData.link,
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
    const featuresCell = (cell) => {
        if (cell.length > 100) {
            return `${cell.substring(0, 100)}.....`;
        }
        return cell;
    };
    const linkCell = (cell) => {
        if (cell.length > 20) {
            return `${cell.substring(0, 20)}.....`;
        }
        return cell;
    };
    const cellImg = (cell) => <img className="w-25" src={cell} alt={cell} />;
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
            dataField: 'name',
            text: 'Product Name',
        },
        {
            dataField: 'features',
            text: 'Product Features',
            formatter: featuresCell,
        },
        {
            dataField: 'link',
            text: 'Demo Link',
            formatter: linkCell,
        },
        {
            dataField: '',
            text: 'Action',
            formatter: actions,
        },
    ];
    if (products.length > 0) {
        return (
            <>
                <BootstrapTable
                    keyField="id"
                    data={products}
                    columns={columns}
                    pagination={paginationFactory()}
                />

                <Modal show={editShow} onHide={handleCloseEdit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditProduct onChangeRender={onChangeRender} editorData={editorData} />
                    </Modal.Body>
                    <Modal.Footer />
                </Modal>

                <Modal show={deleteShow} onHide={handleCloseDelete}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Product?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <DeleteProduct
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
