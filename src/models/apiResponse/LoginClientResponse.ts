import { ClientData } from "../dataType/ClientInfo";
import { HomePageResponse } from "./HomePageResponse";

export type LoginClientResponse = {
  client: ClientData,
  homePageData: HomePageResponse,
}