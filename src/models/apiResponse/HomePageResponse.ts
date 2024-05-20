import { Categorie } from "../dataType/Categorie";
import { Service } from "../dataType/Service";

export type HomePageResponse = {
  categories: Categorie[],
  popularServices: Service[],
  recommendedServices: Service[],
};