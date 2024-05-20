import { Categorie } from "../models/dataType/Categorie";
import { Service } from "../models/dataType/Service";
import { ServiceListData } from "../models/dataType/ServiceList";

const mapCategoriesToServiceListData = (subcategories: Categorie[]): ServiceListData[] => {
    return subcategories.map((value) => {
        return {
            image: value.image,
            num: value.numCategorie,
            nom: value.nomCategorie,
            description: undefined
        };
    });
}

const mapServicesToServiceListData = (services: Service[]): ServiceListData[] => {

    return services.map((value) => {
        return {
            image: value.image,
            num: value.numService,
            nom: value.nomService,
            description: value.description
        };
    });
}

export { mapCategoriesToServiceListData, mapServicesToServiceListData }