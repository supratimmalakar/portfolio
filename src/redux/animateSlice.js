import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    a_bool : true
}

export const animateSlice = createSlice({
    name: 'animate',
    initialState,
    reducers: {
        setBool: (state, action) => {
            state.a_bool = action.payload
        },
        flipBool: (state) => {
            state.a_bool = !state.a_bool
        }
    }
})

export const {setBool, flipBool} = animateSlice.actions

export default animateSlice.reducer