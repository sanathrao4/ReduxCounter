import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    expression: '',
    error: ''
}



const equateSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        equate: (state, action) => {
            state.value = action.payload.value
            state.expression = action.payload.expression
            state.error = action.payload.error
            console.log('action', action.payload)
        },
    }
})

export const { equate } = equateSlice.actions





export default equateSlice.reducer