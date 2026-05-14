'use client';
import { useTheme } from '@/context/NavContext';
import React, { useEffect } from 'react';

const Negasit = () => {
   const { isWhiteMode } = useTheme();
    useEffect(() => {
        isWhiteMode(true);
    }, []);
    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h1>404: Opera nu există</h1></div>
    );
}

export default Negasit;
