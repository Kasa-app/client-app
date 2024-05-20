import { AGENDA, requestHeaders } from "../app-config";
import { GetAppointmentResponse } from "../models/apiResponse/GetAppointmentResponse";
import { makeGetRequest, makePostRequest } from "./HttpService";

const addAppointment = async ({ data, onUploadProgress, setIsLoading }: any): Promise<any | undefined> => {
  const url = `${AGENDA.BASE_URL}${AGENDA.api.addAppointment}`;
  try {
    return makePostRequest<any>(url, data, requestHeaders, onUploadProgress, setIsLoading);
  } catch (err: any) {
    throw err;
  }
};

const getAppointment = async ({ clientId, onDownloadProgress, setIsLoading }: any): Promise<GetAppointmentResponse[]> => {
  const url = `${AGENDA.BASE_URL}${AGENDA.api.getAppointment}/${clientId}`;
  try {
    return makeGetRequest<GetAppointmentResponse[]>(url, requestHeaders, onDownloadProgress, setIsLoading);
  } catch (err: any) {
    throw err;
  }
};

export { addAppointment,getAppointment };