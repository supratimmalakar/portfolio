import { createSlice } from "@reduxjs/toolkit";

const tabs = ['about', 'portfolio', 'contact']

const initialState = {
    flipped: false,
    frontCard: tabs[0],
    backCard: tabs[1],
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        flip: (state) => {
            state.flipped = !state.flipped
        },
        setFront: (state, action) => {
            state.frontCard = action.payload
        },
        setBack: (state, action) => {
            state.backCard = action.payload
        },
    }
})

export const { flip, setFront, setBack, flipside } = cardSlice.actions

export default cardSlice.reducer