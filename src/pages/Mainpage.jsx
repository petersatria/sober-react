import { Outlet } from 'react-router-dom';

import Header from '../components/Layouts/Header';

export default function Mainpage() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
