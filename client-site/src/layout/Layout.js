import React from 'react';
import Footer from '../components/footer/Footer';
import SiteNav from '../components/site nav/SiteNav';

export default function Layout({ children }) {
    return (
        <>
            <SiteNav />
            {children}
            <Footer />
        </>
    );
}
