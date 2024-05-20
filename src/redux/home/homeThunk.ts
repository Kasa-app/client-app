import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHomePageData } from "../../services/ManagementService";

export const fetchHomeData = createAsyncThunk('home/fetchHomeData', async () => {
    try {
        const response = await getHomePageData();
        return response;
    } catch (error) {
        throw error;
    }
});