import {configureStore} from '@reduxjs/toolkit'
import authReducers from '../features/authSlice'

export let store = configureStore({
    reducer:{
        auth:authReducers
    }
})
