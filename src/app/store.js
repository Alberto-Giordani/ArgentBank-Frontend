import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'

// Configures Redux store with a single 'user' slice
export const store = configureStore({
    reducer: {
        user: userReducer,
    },
})