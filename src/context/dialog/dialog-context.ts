import { createContext } from "react";
import { DialogContextType } from "../../models/contextType/DialogContextType";

export const DialogContext = createContext<DialogContextType>({
  showDialog: () => {},
});