import { createContext } from "react";
import { AuthentificationContextType } from "../../models/contextType/AuthentificationContextType";
import { ClientData } from "../../models/dataType/ClientInfo";
import { HomePageResponse } from "../../models/apiResponse/HomePageResponse";

export const AuthentificationContext = createContext<AuthentificationContextType>({
  client: {} as ClientData,
  homePageData: {} as HomePageResponse,
  signUpData: {} as ClientData,
  setSignUpData: () => { },
  setAuthHomePageData: () => {},
});