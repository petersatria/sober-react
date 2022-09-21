import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Homepage, Test, Profile } from './pages/index'
import { Provider } from 'react-redux'
import store from './store/store'
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
