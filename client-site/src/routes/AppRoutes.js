import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import Contact from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}
