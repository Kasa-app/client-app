import { ClientData } from "../dataType/ClientInfo";
import { HomePageResponse } from "./HomePageResponse";

export type EnregistrerClient = {
  client: ClientData,
  homePageData: HomePageResponse,
}