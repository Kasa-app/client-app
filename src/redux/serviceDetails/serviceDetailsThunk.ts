import { createAsyncThunk } from "@reduxjs/toolkit";
import { getServiceDetails } from "../../services/ManagementService";

export const fetchServiceDetails = createAsyncThunk('serviceDetails/fetchServiceDetails', async (numService:string) => {
    try {
        const response = await getServiceDetails({ serviceId: numService });
        return response;
    } catch (error) {
        throw error;
    }
});
