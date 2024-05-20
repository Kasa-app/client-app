import { Categorie } from "../dataType/Categorie";
import { Service } from "../dataType/Service";

export type CategoriesListResponse = {
    subcategories: Categorie[];
    services: Service[];
  };