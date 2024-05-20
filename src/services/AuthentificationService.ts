import { AUTHENTIFICATION, requestHeaders } from '../app-config';
import { ClientResponse } from '../models/apiResponse/ClientResponse';
import { EnregistrerClient } from '../models/apiResponse/EnregistrerClientResponse';
import { JobberResponse } from '../models/apiResponse/JobberResponse';
import { LoginClientResponse } from '../models/apiResponse/LoginClientResponse';
import { makeGetRequest, makePostRequest } from './HttpService';

const enregistrerClient = async ({ data, onUploadProgress, setIsLoading }: any): Promise<EnregistrerClient | undefined> => {
  const url = `${AUTHENTIFICATION.BASE_URL}${AUTHENTIFICATION.api.enregistrerClient}`;
  try {
    return makePostRequest<EnregistrerClient>(url, data, requestHeaders, onUploadProgress, setIsLoading);
  }
  catch (err: any) {
    throw err;
  }
};

const loginClient = async ({ data, onUploadProgress, setIsLoading }: any): Promise<LoginClientResponse | undefined> => {
  const url = `${AUTHENTIFICATION.BASE_URL}${AUTHENTIFICATION.api.loginClient}`;
  try {
    return makePostRequest<LoginClientResponse>(url, data, requestHeaders, onUploadProgress, setIsLoading);
  } catch (err: any) {
    throw err;
  }
};

const getJobbersProfile = async ({ data, onDownloadProgress, setIsLoading }: any): Promise<any> => {
  const url =`${AUTHENTIFICATION.BASE_URL}${AUTHENTIFICATION.api.getJobbersProfile}`;
  try {
    return makePostRequest<JobberResponse[]>(url, data, requestHeaders, onDownloadProgress, setIsLoading);
  } catch (err: any) {
    throw err;
  }
};

const getClientsProfile = async ({ data, onDownloadProgress, setIsLoading }: any): Promise<any> => {
  const url =`${AUTHENTIFICATION.BASE_URL}${AUTHENTIFICATION.api.getClientsProfile}`;
  try {
    return makePostRequest<ClientResponse[]>(url, data, requestHeaders, onDownloadProgress, setIsLoading);
  } catch (err: any) {
    throw err;
  }
};

const validateClientEmailExists = async ({ email, onDownloadProgress, setIsLoading }: any): Promise<{ emailExists: boolean }> => {
  const url = `${AUTHENTIFICATION.BASE_URL}${AUTHENTIFICATION.api.validateCLientEmailExists}/${email}`;
  try {
    return makeGetRequest<{ emailExists: boolean }>(url, requestHeaders, onDownloadProgress, setIsLoading);
  } catch (err: any) {
    throw err;
  }
};

export {
  enregistrerClient,
  getClientsProfile,
  getJobbersProfile,
  loginClient,
  validateClientEmailExists
};
