import { createSlice } from '@reduxjs/toolkit'
import { homeState } from './homeState';
import { fetchHomeData } from './homeThunk';

const homeSlice = createSlice({
    name: 'homeData',
    initialState: homeState,
    reducers: {
        setNumService(state, action) {
            state.numService = action.payload;
        },

        setNumCategorie(state, action) {
            state.numCategorie = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHomeData.fulfilled, (state, action) => {
            state.homeData = action.payload;
        });
    }
});

export const { actions, reducer } = homeSlice;
export { fetchHomeData };
