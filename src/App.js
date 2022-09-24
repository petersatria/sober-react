import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Mainpage, Homepage, SignupPage } from './pages/index';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard/Dashboard';

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
                        <Route path="features" element={<h1>features</h1>} />
                        <Route path="pages" element={<h1>pages</h1>} />
                        <Route path="blog" element={<h1>blog</h1>} />
                    </Route>

                    <Route path="/signup" element={<SignupPage />} />

                    <Route path="/admin" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
