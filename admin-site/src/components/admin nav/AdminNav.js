import React, { useState } from 'react';
import Sidenav from './Sidenav';
import Topnav from './Topnav';

export default function AdminNav() {
    const [sideNav, setSidenav] = useState(true);
    const onChangeMenuHandler = () => {
        setSidenav(!sideNav);
    };
    return (
        <>
            <Topnav onChange={onChangeMenuHandler} />
            {sideNav && <Sidenav />}
        </>
    );
}
