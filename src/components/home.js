import React from 'react';
import Header from './header';
import GetProductsByUser from './User/HomeGetAllProducts';

function Home() {
    return (
        <>
            <Header heading="Amazona" />
            <GetProductsByUser />
        </>
    )
}

export default Home;