import { createSlice } from '@reduxjs/toolkit'

// Initial authentication and user info state
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
        // Called after successful login, stores the token
        loginSuccess: (state, action) => {
            state.token = action.payload
            state.isAuthenticated = true
        },
        // Updates user profile information
        setProfile: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.userName = action.payload.userName
        },
        // Clears authentication and user info on logout
        logout: (state) => {
            state.token = initialState.token
            state.isAuthenticated = initialState.isAuthenticated
            state.firstName = initialState.firstName
            state.lastName = initialState.lastName
            state.userName = initialState.userName
        },
    },
})

export const { loginSuccess, setProfile, logout } = userSlice.actions
export default userSlice.reducer