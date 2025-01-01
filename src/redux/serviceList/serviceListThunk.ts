import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesData } from "../../services/ManagementDataService";

export const fetchServiceList = createAsyncThunk('serviceList/fetchServiceList', async (numCategorie:string) => {
    try {
        const response = await getCategoriesData({ numCategorie: numCategorie });
        return response;
    } catch (error) {
        throw error;
    }
});
