import React from 'react';
import { it } from '@jest/globals';
import { act, render } from '@testing-library/react-native';
import { NavigatorContext } from '../../context/navigation/navigator-context';
import { Screen } from '../../data/Screen';
import { TouchableOpacity } from 'react-native';
import { InscriptionStepper } from '../../models/stepper/InscriptionStepper';
import { create } from 'react-test-renderer';
import StartupPage from '../../screens/authentification/startup/startup-page';

const mockNavigatorContextValue = {
    routeName: '',
    setRouteName: jest.fn(),
    activeStep: InscriptionStepper.UserName,
    setActiveStep: jest.fn(),
  };
  const MockNavigatorContextProvider = ({ children }: any) => (
    <NavigatorContext.Provider value={mockNavigatorContextValue}>
        {children}
    </NavigatorContext.Provider>
  );

describe('StartupPage', () => {
    const tree = create(<StartupPage />);

    it('snapshot', () => {
        expect(tree).toMatchSnapshot();
    });

    it('should set signUp routeName when the "Inscription" button is pressed', async () => {
        const mockNavigateToScreen = jest.fn();
        const component = render(<StartupPage navigation={{ navigate: mockNavigateToScreen }} />,);
        const buttons = component.root.findAllByType(TouchableOpacity);
        const continueBtn = buttons[0].props;
        await act(async () => await continueBtn.onPress());

        expect(mockNavigateToScreen).toHaveBeenCalledWith(Screen.authentification.signUp);
    });
});
