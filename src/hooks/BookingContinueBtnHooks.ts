import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { actions } from '../redux/booking/bookingSlice';

export const HandleContinueBtn = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { resetContinueBtn, setIsContinueBtnDisabled, hideContinueBtn } = actions;
    useEffect(() => {
        dispatch(resetContinueBtn());
    }, [])

    const enableBtn = () => {
        dispatch(setIsContinueBtnDisabled(false));
    };

    const hideBtn = () => {
        dispatch(hideContinueBtn());
    }

    return { enableBtn, hideBtn }
};
