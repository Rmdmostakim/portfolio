import React from 'react';
import HomeParallex from '../components/parallex/HomeParallex';
import RecentProducts from '../components/recent products/RecentProducts';
import Services from '../components/services/Services';

export default function Home() {
    return (
        <>
            <HomeParallex />
            <Services />
            <RecentProducts />
        </>
    );
}
