import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Test, SignupPage } from './pages/index';
import { Provider } from 'react-redux';

import store from './store/store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
