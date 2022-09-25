import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Test, SignupPage, ProfilePage } from './pages/index';
import{ ProfileEdit,ProfileDetail } from './components/Profile'
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
                    <Route path="profile/:id" element={<ProfilePage />} >
                        <Route index path={'details'} element={<ProfileDetail />} />
                        <Route path={'settings'} element={<ProfileEdit/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
