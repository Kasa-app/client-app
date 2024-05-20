import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchJobber } from "../../services/ManagementService";

export const fetchJobber = createAsyncThunk('searchJobber/fetchJobber', async (dataQuery: any) => {
    try {
        const response = await searchJobber({ data: dataQuery });
        return response;
    } catch (error) {
        throw error;
    }
});
