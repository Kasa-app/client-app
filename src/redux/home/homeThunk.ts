import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHomePageData } from "../../services/ManagementDataService";

export const fetchHomeData = createAsyncThunk('home/fetchHomeData', async () => {
    try {
        console.log("debut fetchData")
        const response = await getHomePageData();
        console.log("fetchData", response)
        return response;
    } catch (error:any) {
        console.log(" err fetchData", error.request)
        throw error;
    }
});