import { createSlice } from '@reduxjs/toolkit'
import { fetchServiceList } from './serviceListThunk';
import { serviceListState } from './serviceListState';

const serviceListSlice = createSlice({
    name: 'serviceList',
    initialState: serviceListState,
    reducers: {

    },  

    extraReducers: (builder) => {
        builder.addCase(fetchServiceList.fulfilled, (state, action) => {
            state.serviceListData = action.payload;
        });
    }
});

export const { actions, reducer } = serviceListSlice;
