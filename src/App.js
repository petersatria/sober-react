import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Homepage, Cart } from './pages/index'
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
        <Route path="/" element={<Homepage/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
