import React, { Suspense, lazy } from 'react'
import Breadcrumbs from '../compoments/Breadcrumbs'
import { useLocation } from 'react-router-dom';
import Loading from '../compoments/Loading';

const Nav = lazy(() => import('../compoments/Nav'));


export default function MainLayout({ children }) {

    const location = useLocation();
    const isHomeRoute = location.pathname === '/';


    return (
        <>
            <Suspense fallback={<Loading />}>
                <Nav />
            </Suspense>
            {!isHomeRoute && <Breadcrumbs />}
            <main style={{ maxWidth: '1200px', margin: 'auto' }}>{children}</main>
        </>
    )
}


