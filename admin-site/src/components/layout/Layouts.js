import React from 'react';
import AdminNav from '../admin nav/AdminNav';

export default function Layouts({ children }) {
    return (
        <>
            <AdminNav />
            {children}
        </>
    );
}
