import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    isAuthenticated: false,
    firstName: "",
    lastName: "",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.token = action.payload
            state.isAuthenticated = true
        },
        setProfile: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        logout: (state) => {
            state.token = null
            state.isAuthenticated = false
            state.firstName = ""
            state.lastName = ""
        },
    },
})

export const { loginSuccess, setProfile, logout } = userSlice.actions
export default userSlice.reducer