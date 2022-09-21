import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Homepage, Test, ProductDetail, ProductList } from './pages/index'
import { Provider } from 'react-redux'
import store from './store/store'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
