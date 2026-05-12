import React from 'react';
import ClientBiografie from './ClientBiografie';
import Background from '@/components/background';
import Navbar from '@/components/NavBar';

const Page = () => {
    return (
        <>
            <Navbar light={true}/>
            <Background />
            <ClientBiografie />
        </>
    );
}

export default Page;