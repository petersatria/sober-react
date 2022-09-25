import { Outlet } from 'react-router-dom';

import Header from '../components/Layouts/Header';
import Footer from '../components/Layouts/Footer';

export default function Mainpage() {
    return (
        <>
            {/* <Header /> */}
            <Outlet />
            <Footer />
        </>
    );
}
