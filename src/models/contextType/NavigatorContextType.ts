import { InscriptionStepper } from "../stepper/InscriptionStepper";

export type NavigatorContextType = {
    activeStep: InscriptionStepper | null;
    setActiveStep: (step: InscriptionStepper) => void;
}