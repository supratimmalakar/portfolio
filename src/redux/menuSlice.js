import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    show : false
}

export const animateSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuToggle: (state) => {
            state.show = !state.show
        }
    }
})

export const { menuToggle } = animateSlice.actions

export default animateSlice.reducer