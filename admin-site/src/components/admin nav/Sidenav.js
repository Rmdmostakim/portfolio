import React from 'react';
import * as aiIcon from 'react-icons/ai';
import * as faIcon from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Classes from '../../assets/css/Sidenav.module.css';
import Submenu from './Submenu';

export default function Sidenav() {
    return (
        <div className={`${Classes.sideNav} bg-dark text-white-50`}>
            <div className={Classes.sidenavLink}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? Classes.active : '')}>
                        <aiIcon.AiFillDashboard /> Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/services"
                        className={({ isActive }) => (isActive ? Classes.active : '')}
                    >
                        <aiIcon.AiTwotoneCustomerService /> Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/products"
                        className={({ isActive }) => (isActive ? Classes.active : '')}
                    >
                        <faIcon.FaProjectDiagram /> Products
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/utility"
                        className={({ isActive }) => (isActive ? Classes.active : '')}
                    >
                        <faIcon.FaCogs /> Web Utility
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/mail"
                        className={({ isActive }) => (isActive ? Classes.active : '')}
                    >
                        <faIcon.FaMailBulk /> Mail
                    </NavLink>
                </li>

                <Submenu icon={<faIcon.FaArrowAltCircleDown />} title=" Dropdwon">
                    <ul
                        style={{
                            width: '100%',
                            display: 'block',
                            marginTop: '5px',
                            backgroundColor: '#000',
                            borderRadius: '5px',
                            padding: '5px',
                        }}
                    >
                        <a style={{ width: '100%', display: 'flex' }} href="@">
                            <faIcon.FaTicketAlt /> First Dropwoen
                        </a>
                        <a style={{ width: '100%', display: 'block' }} href="@">
                            <faIcon.FaAddressBook /> Second Dropwoen
                        </a>
                    </ul>
                </Submenu>
            </div>
        </div>
    );
}
