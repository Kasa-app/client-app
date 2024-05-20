export type ServiceComment = {
  commentId: string;
  numService: string;
  numClient: string | null;
  comment: string;
  commentDate: Date;
  note: number;
  client: {
    nom: string;
    prenom: string;
    photo: string | null;
  },
};