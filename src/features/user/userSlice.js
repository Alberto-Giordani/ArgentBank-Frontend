import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    isAuthenticated: false,
    firstName: "",
    lastName: "",
    userName: "",
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
            state.userName = action.payload.userName
        },
        logout: (state) => {
            state.token = null
            state.isAuthenticated = false
            state.firstName = ""
            state.lastName = ""
            state.userName = ""
        },
    },
})

export const { loginSuccess, setProfile, logout } = userSlice.actions
export default userSlice.reducer