import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/index'
import thunk from 'redux-thunk'

export default configureStore({
    reducer,
    middleware:[thunk]
})