import React from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron';
import ProductsContainer from '../components/products/ProductsContainer';

function ProductPage() {
    return <ProductsContainer />;
}
export default Jumbotron(ProductPage);
