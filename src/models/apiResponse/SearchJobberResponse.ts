import { ServiceComment } from "../dataType/ServiceComment";

type PlageHoraireDate = {
  dateDebut: Date;
  dateFin: Date;
}

export type SearchJobberResponse = {
  prenom: string;
  nom: string;
  numJobber: string;
  note: number;
  nombreCommentaire: number;
  dateCreation: Date;
  nombreServiceRealise: number;
  tauxHoraire: number;
  disponible: boolean;
  disponibiliteJobber: PlageHoraireDate[];
  respectExigence: boolean;
  exigences: string;
  commentaires: ServiceComment[];
  langues: string[];
  description: string;
  codePostal: string;
  ville: string;
};
