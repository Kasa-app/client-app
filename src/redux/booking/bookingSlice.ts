import { createSlice } from '@reduxjs/toolkit'
import { bookingState } from './bookingState';

const bookingSlice = createSlice({
    name: 'bookingSteps',
    initialState: bookingState,
    reducers: {
        setCurrentStep(state, action) {
            state.currentStep = action.payload;
        },
        setBookingData(state, action) {
            state.bookingData = action.payload
        },

        setSelectedJobber(state, action) {
            state.selectedJobber = action.payload
        },

        setIsContinueBtnDisabled(state, action) {
            state.isContinueButtonDisabled = action.payload
        },

        setBookingQuestions(state, action) {
            state.bookingQuestions = action.payload
        },

        resetContinueBtn(state) {
            state.isContinueButtonDisabled = true;
            state.shouldShow = true;
        },

        resetBookingData(state) {
            state.bookingData = {
                exigences: []
            }
        },

        hideContinueBtn(state) {
            state.shouldShow = false
        },
    },

});

export const { actions, reducer } = bookingSlice;
