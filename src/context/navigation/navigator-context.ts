import { createContext } from "react";
import { NavigatorContextType } from "../../models/contextType/NavigatorContextType";

export const NavigatorContext = createContext<NavigatorContextType>({
  activeStep: null,
  setActiveStep: () => { },
});