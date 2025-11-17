import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto px-4'>
            <Logo></Logo>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;