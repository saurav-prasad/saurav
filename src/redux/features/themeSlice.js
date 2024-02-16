import { createSlice } from "@reduxjs/toolkit"

const initialState = { darkMode: false }
export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        lightMode: (state, action) => {
            state.darkMode = false
        },
        nightMode: (state, action) => {
            state.darkMode = true
        }
    }
})
export const { lightMode, nightMode } = themeSlice.actions
export default themeSlice.reducer