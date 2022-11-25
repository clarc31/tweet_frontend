import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

export const closeSignUpSlice = createSlice({
    name: 'closeSignUp',
    initialState,
    reducers: {
        closeSignUpWindow: (state, action) => {
            state.value.isSignUpVisible = action.payload.isSignUpVisible
        }
    }
})

export const {closeSignUpWindow} = closeSignUpSlice;
export default closeSignUpSlice.reducer;