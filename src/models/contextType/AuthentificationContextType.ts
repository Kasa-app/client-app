import { ClientData } from "../dataType/ClientInfo";
import { HomepageData } from "../apiResponse/HomePageResponse";

export type AuthentificationContextType = {
    client: ClientData | undefined;
    homePageData: HomepageData | undefined;
    signUpData: ClientData | undefined;
    setSignUpData: (data: ClientData) => void;
    setAuthHomePageData: (data: { homePageData: HomepageData | undefined, client: ClientData | undefined }) => void;
}