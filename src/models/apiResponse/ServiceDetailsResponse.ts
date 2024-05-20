import { Service } from "../dataType/Service";
import { ServiceComment } from "../dataType/ServiceComment";

export type ServiceDetailsResponse = {
  image: string;
  numService: string;
  numCategorie: string;
  nomService: string;
  description: string | undefined;  averageCost: number;
  estimatedServiceDuration: number;
  comments: ServiceComment[];
};