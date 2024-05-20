import { createSlice } from '@reduxjs/toolkit'
import { chatState } from './chatState';

const chatSlice = createSlice({
    name: 'chatData',
    initialState: chatState,
    reducers: {
        setMessages(state, action) {
            state.messages = action.payload;
        },

        setidReceiver(state, action) {
            state.idReceiver = action.payload;
        },
    },
});

export const { actions, reducer } = chatSlice;
