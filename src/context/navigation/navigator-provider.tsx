import React, { useState } from 'react';
import { NavigatorContext } from './navigator-context';
import { InscriptionStepper } from '../../models/stepper/InscriptionStepper';
import { NavigatorContextType } from '../../models/contextType/NavigatorContextType';

export const NavigatorProvider = ({ children }: any) => {
  const [activeStep, setActiveStep] = useState(InscriptionStepper.SignUpWithEmail);
  const context: NavigatorContextType =
  {
    activeStep,
    setActiveStep,
  };

  return (
    <NavigatorContext.Provider value={context}>
      {children}
    </NavigatorContext.Provider>
  );
};

