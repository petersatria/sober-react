import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Homepage, Test, ProductDetail, ProductList, OrderList, Cart, SignupPage, Mainpage, ProfilePage, Login } from "./pages/index";
import { ProfileEdit, ProfileDetail } from "./components/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import FormAdd from './components/Dashboard/FormAdd';
import FormDashboard from "./components/Dashboard/FormDashboard";
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
        <Route path="/" element={<Navigate to="/main/home" />} />
        <Route path="/main/*" element={<Mainpage />}>
          <Route path="home" element={<Homepage />} />
          <Route path="products" element={<ProductList />} />
          <Route path="features" element={<h1>features</h1>} />
          <Route path="pages" element={<h1>pages</h1>} />
          <Route path="blog" element={<h1>blog</h1>} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="profile/:id" element={<ProfilePage />}>
          <Route index path={"details"} element={<ProfileDetail />} />
          <Route path={"settings"} element={<ProfileEdit />} />
        </Route>
        <Route path="/admin" element={<Dashboard />}>
          <Route path="edit/:productId" element={<FormDashboard />} />
          <Route path="add-product" element={<FormAdd />} />

        </Route>
        <Route path="/test" element={<Test />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/order-list/:userId/" element={<OrderList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
