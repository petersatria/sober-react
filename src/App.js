import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Homepage, Test, ProductDetail, ProductList, OrderList, Cart } from './pages/index'
import { Provider } from 'react-redux'
import store from './store/store'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
      </header>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
