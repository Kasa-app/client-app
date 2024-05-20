import { createAsyncThunk } from "@reduxjs/toolkit";
import { addAppointment } from "../../services/AgendaService";

export const createAppointment = createAsyncThunk('booking/createAppointment', async ({ data }: any) => {

    try {
        await addAppointment({ data });
    } catch (error) {
        throw error;
    }
});