import React from 'react';
import ClientPage from './ClientPage';
import Navbar from './NavBar';
import Background from './background';

const Page = () => {
    return (
        <>
            <Navbar />
            <Background />
            <ClientPage />
        </>

    );
}

export default Page;