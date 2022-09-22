import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Homepage, SignupPage } from './pages/index';
import ProductsBestSeller from './components/Layouts/ProductsBestSeller';
import { Provider } from 'react-redux';

import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/home/best-sellers" />} />

                    <Route path="/home/*" element={<Homepage />}>
                        <Route path="best-sellers" element={<ProductsBestSeller />} />
                    </Route>

                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
