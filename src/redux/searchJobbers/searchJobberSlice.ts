import { createSlice } from '@reduxjs/toolkit'
import { fetchJobber } from './searchJobberThunk';
import { searchJobberState } from './searchJobberState';

const searchJobberSlice = createSlice({
    name: 'searchJobber',
    initialState: searchJobberState,
    reducers: {
    },  
    extraReducers: (builder) => {
        builder.addCase(fetchJobber.fulfilled, (state, action) => {
            state.searchJobberData = action.payload;
            state.isLoading = false;
        });

        builder.addCase(fetchJobber.pending, (state) => {
            state.isLoading = true;
        })
    }
});

export const { actions, reducer } = searchJobberSlice;
