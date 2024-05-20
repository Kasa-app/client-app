import { ServiceCommentResponse } from "../management/ServiceCommentResponse";

export type Service = {
  image: string;
  numService: string;
  numCategorie: string;
  nomService: string;
  description: string;
  averageCost: number;
  estimatedServiceDuration: number;
  comments: ServiceCommentResponse[];
};
