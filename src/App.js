import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import {
    Homepage,
    Test,
    ProductDetail,
    ProductList,
    OrderList,
    Cart,
    SignupPage,
    Mainpage,
} from './pages/index';
import Dashboard from './components/Dashboard/Dashboard';
import FormAdd from './components/Dashboard/FormAdd';
import FormUpdate from './components/Dashboard/FormUpdate';
import Header from './components/Layouts/Header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCart } from './store/actions/CartAction';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/main/home" />} />
                <Route path="/main/*" element={<Mainpage />}>
                    <Route path="home" element={<Homepage />} />
                    <Route path="shop" element={<h1>shop</h1>} />
                    <Route path="features" element={<h1>features</h1>} />
                    <Route path="pages" element={<h1>pages</h1>} />
                    <Route path="blog" element={<h1>blog</h1>} />
                </Route>

                <Route path="/signup" element={<SignupPage />} />

                <Route path="/admin" element={<Dashboard />}>
                    <Route path="edit/:productId" element={<FormUpdate />} />
                    <Route path="add-product" element={<FormAdd />} />
                </Route>
                <Route path="/test" element={<Test />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/order-list" element={<OrderList />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
