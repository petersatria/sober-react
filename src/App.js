import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Homepage, Test, ProductDetail, ProductList, OrderList, Cart, SignupPage, Mainpage, ProfilePage, Login, PageUnderConst, PageNotFound } from "./pages/index";
import { ProfileEdit, ProfileDetail } from "./components/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import FormAdd from './components/Dashboard/FormAdd';
import FormDashboard from "./components/Dashboard/FormDashboard";
import FormUpdate from './components/Dashboard/FormUpdate';
import Header from "./components/Layouts/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCart } from "./store/actions/CartAction";
import { checkLogin } from "./store/actions/LoginAction";
import { getCookie } from './moduleComponents/cookie'

function App() {
  const dispatch = useDispatch();
  const userId = JSON.parse(getCookie('userCookie'))
  console.log(userId)

  useEffect(() => {
    if (userId) {
      dispatch(getCart());
    }
    dispatch(checkLogin());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Mainpage />}>
          <Route path="/" element={<Homepage />} />
          <Route path="products" element={<ProductList />} />
          <Route path="features" element={<PageUnderConst />} />
          <Route path="pages" element={<PageUnderConst />} />
          <Route path="blog" element={<PageUnderConst />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="profile/:id" element={<ProfilePage />}>
          <Route index path="details" element={<ProfileDetail />} />
          <Route path="settings" element={<ProfileEdit />} />
          <Route path="order-list/:userId" element={<OrderList />} />
        </Route>
        <Route path="/admin" element={<Dashboard />}>
          <Route path="edit/:productId" element={<FormUpdate />} />
          <Route path="add-product" element={<FormAdd />} />
        </Route>
        <Route path="/test" element={<Test />} />
        <Route path="/products" element={[<ProductList />, <Mainpage />]} />
        <Route path="/products/:id" element={[<ProductDetail />, <Mainpage />]} />
        <Route path="/order-list/:userId/" element={[<OrderList />, <Mainpage />]} />
        <Route path="/cart" element={[<Cart />, <Mainpage />]} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
