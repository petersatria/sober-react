import { Outlet } from 'react-router-dom';
import Header from '../components/Layouts/Header';
import Hero from '../components/Layouts/Hero';
import ProductCategory from '../components/Layouts/ProductCategory';

export default function Homepage() {
    return (
        <>
            <Header />
            <Hero />
            <ProductCategory />
            <Outlet />
        </>
    );
}
