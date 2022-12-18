import { createSlice } from "@reduxjs/toolkit";

const globalReducer = createSlice({
    name: 'global',
    initialState: {
        success: ''
    },
    reducer: {
        setSuccess: (state, action) => {
            state.success = action.payload;
        }
    }
})

export const { setSuccess } = globalReducer.actions;
export default globalReducer.reducer