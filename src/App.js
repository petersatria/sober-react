import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Mainpage, Homepage, SignupPage } from './pages/index';
import { Provider } from 'react-redux';

import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/main/home" />} />

                    <Route path="/main/*" element={<Mainpage />}>
                        <Route path="home" element={<Homepage />} />
                        <Route path="shop" element={<h1>shop</h1>} />
                    </Route>

                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
