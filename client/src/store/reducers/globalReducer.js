import { createSlice } from "@reduxjs/toolkit";

const globalReducer = createSlice({
    name: 'global',
    initialState: {
        success: ''
    },

    reducers: {
        setSuccess: (state, action) => {
            console.log('action in setSuccess', action)
            state.success = action.payload;
        },
        clearMessage: (state) => {
            state.success = '';
        }
    }
})

export const { setSuccess, clearMessage } = globalReducer.actions;
export default globalReducer.reducer