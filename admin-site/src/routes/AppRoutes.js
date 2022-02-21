import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import MailPage from '../pages/MailPage';
import ProductPage from '../pages/ProductPage';
import ServicePage from '../pages/ServicePage';
import UtilityPage from '../pages/UtilityPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/utility" element={<UtilityPage />} />
            <Route path="/mail" element={<MailPage />} />
        </Routes>
    );
}
