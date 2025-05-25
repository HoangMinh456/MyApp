import { createSlice } from "@reduxjs/toolkit";

const notifiSlice = createSlice({
    name: 'notifi',
    initialState: {
        type: 'idle',
        message: false,
        button: false,
    },
    reducers: {
        showOff(state) {
            state.type = 'idle';
        },
        showLoading(state) {
            console.log('state.type: loading');
            state.type = 'loading';
        },
        ShowNotifi(state, action) {
            console.log('payload', action.payload.message)
            state.type = 'notifi';
            state.message = action.payload.message;
        },
    },
});

export const { showOff, showLoading, ShowNotifi } = notifiSlice.actions;

export default notifiSlice.reducer;