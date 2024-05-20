import { createSlice } from '@reduxjs/toolkit'
import { serviceDetailsState } from './serviceDetailsState';
import { fetchServiceDetails } from './serviceDetailsThunk';

const serviceDetailsSlice = createSlice({
    name: 'serviceDetails',
    initialState: serviceDetailsState,
    reducers: {
        setEstimatedServiceDuration(state, action) {
            state.estimatedServiceDuration = action.payload;
        },
        setNomService(state, action) {
            state.nomService = action.payload;
        },
    },  

    extraReducers: (builder) => {
        builder.addCase(fetchServiceDetails.fulfilled, (state, action) => {
            state.serviceDetailsData = action.payload;
        });
    }
});

export const { actions, reducer } = serviceDetailsSlice;
