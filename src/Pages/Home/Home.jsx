import React from 'react';
import AwesomeProduct from './AwesomeProduct';
import Banner from './Banner';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AwesomeProduct></AwesomeProduct>
            <Products></Products> 
        </div>
    );
};

export default Home;