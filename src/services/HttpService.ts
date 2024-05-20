import axios, { AxiosResponse } from 'axios';

const makePostRequest = async <T>(
  url: string,
  data: any,
  requestHeaders: any,
  onUploadProgress: (progress: number) => void,
  setIsLoading: (isLoading: boolean) => void
): Promise<T | undefined> => {
  try {
    setIsLoading(true);
    const response: AxiosResponse<T> = await axios.post<T>(
      url,
      JSON.stringify(data),
      {
        headers: requestHeaders,
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total !== undefined) {
            const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            onUploadProgress(progress);
          }
        },
      }
    );

    return response.data;
  } catch (err) {
    throw err;
  }
};

const makeGetRequest = async <T>(
  url: string,
  requestHeaders: any,
  onDownloadProgress?: (progress: number) => void,
  setIsLoading?: (isLoading: boolean) => void
): Promise<T> => {
  try {
    if (setIsLoading) setIsLoading(true)

    const response: AxiosResponse<T> = await axios.get<T>(url, {
      headers: requestHeaders,
      onDownloadProgress: (progressEvent) => {
        if (progressEvent.total !== undefined && onDownloadProgress) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          onDownloadProgress(progress);
        }
      },
    });
    
    return response.data;
  } catch (err: any) {
    throw err;
  }
};

export { makePostRequest, makeGetRequest };
