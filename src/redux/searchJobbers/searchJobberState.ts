import { SearchJobberResponse } from "../../models/apiResponse/SearchJobberResponse";

export const searchJobberState = {
    searchJobberData: [] as SearchJobberResponse[] | undefined,
    isLoading: false
}