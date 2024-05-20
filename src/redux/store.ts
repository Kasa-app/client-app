import { configureStore } from '@reduxjs/toolkit';
import { reducer as homeReducer } from './home/homeSlice';
import { reducer as chatReducer } from './chat/chatSlice';
import { reducer as bookingReducer } from './booking/bookingSlice';
import { reducer as serviceDetailsReducer } from './serviceDetails/serviceDetailsSlice';
import { reducer as serviceListReducer } from './serviceList/serviceListSlice';
import { reducer as searchJobberReducer } from './searchJobbers/searchJobberSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        home: homeReducer,
        booking: bookingReducer,
        serviceDetails: serviceDetailsReducer,
        serviceList: serviceListReducer,
        searchJobber: searchJobberReducer,
        chat: chatReducer,
    }
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store