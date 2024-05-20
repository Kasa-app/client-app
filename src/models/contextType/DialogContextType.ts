export type DialogContextType = {
  showDialog: (options: { message: string, callback?: Function | undefined }) => void;
};