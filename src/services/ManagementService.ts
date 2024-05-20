import { MANAGEMENT, requestHeaders } from "../app-config";
import { HomePageResponse } from "../models/apiResponse/HomePageResponse";
import { CategoriesListResponse } from "../models/apiResponse/CategoriesListResponse";
import { ServiceDetailsResponse } from "../models/apiResponse/ServiceDetailsResponse";
import { makeGetRequest, makePostRequest } from "./HttpService";
import { SearchJobberResponse } from "../models/apiResponse/SearchJobberResponse";

const getServiceDetails = async ({ serviceId }: any): Promise<ServiceDetailsResponse> => {
  const url = `${MANAGEMENT.BASE_URL}${MANAGEMENT.api.getServiceDetails}/${serviceId}`;
  try {
    return makeGetRequest<ServiceDetailsResponse>(url, requestHeaders);
  } catch (err: any) {
    throw err;
  }
};


const getCategoriesData = async ({ numCategorie }: any): Promise<CategoriesListResponse> => {
  const url = `${MANAGEMENT.BASE_URL}${MANAGEMENT.api.getCategoriesData}/${numCategorie}`;
  try {
    return makeGetRequest<CategoriesListResponse>(url, requestHeaders);
  } catch (err: any) {
    throw err;
  }
};

const getHomePageData = async (): Promise<HomePageResponse> => {
  const url = `${MANAGEMENT.BASE_URL}${MANAGEMENT.api.getHomePageData}`;
  try {
    return makeGetRequest<HomePageResponse>(url, requestHeaders);
  } catch (err: any) {
    throw err;
  }
};

const searchJobber = async ({ data, onDownloadProgress, setIsLoading }: any): Promise<SearchJobberResponse[] | undefined> => {
  const url = `${MANAGEMENT.BASE_URL}${MANAGEMENT.api.searchJobber}`;
  try {
    return makePostRequest<SearchJobberResponse[]>(url, data, requestHeaders, onDownloadProgress, setIsLoading);
  } catch (err: any) {
    throw err;
  }
};

export {
  getServiceDetails,
  getCategoriesData,
  getHomePageData,
  searchJobber
};