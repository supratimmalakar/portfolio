import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './cardSlice'
import animateReducer from './animateSlice'
import menuReducer from './menuSlice'

export const store = configureStore({
    reducer: {
        card : cardReducer,
        animate : animateReducer,
        menu : menuReducer
    },
})