import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './cardSlice'
import animateReducer from './animateSlice'

export const store = configureStore({
    reducer: {
        card : cardReducer,
        animate : animateReducer
    },
})