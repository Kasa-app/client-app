import { Text } from 'react-native';
import React from 'react';
import { it } from '@jest/globals';
import { create, act } from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import AskUserBirthdate from '../../../components/Authentification/Ask-user-birthdate/Ask-user-birthdate';
import DateTimePicker from '@react-native-community/datetimepicker';
import ButtonWithBackgroundColor from '../../../components/Button-with-color-background/button';
import { InscriptionStepper } from '../../../models/stepper/InscriptionStepper';
import { NavigatorContext } from '../../../context/navigation/navigator-context';
import { Screen } from '../../../data/Screen';
import { fireEvent } from 'react-native-testing-library';
jest.mock('react-native-keyboard-aware-scroll-view', () => {
  return {
    KeyboardAwareScrollView: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  };
});

const mockNavigatorContextValue = {
  routeName: '',
  setRouteName: jest.fn(),
  activeStep: InscriptionStepper.UserEmail,
  setActiveStep: jest.fn(),
};
const MockNavigatorContextProvider = ({ children }: any) => (
  <NavigatorContext.Provider value={mockNavigatorContextValue}>
      {children}
  </NavigatorContext.Provider>
);

describe('AskUserBirhtdateComponent', () => {

  let tree: any

  beforeEach(() => {
    tree = render(<AskUserBirthdate />);
  });

  it('snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  it('When birthdate input is pressed should show calendar', () => {
    const textComponent = tree.root.findAllByType(Text)
    const birthdateText = textComponent[0].props;
    act(() => birthdateText.onPress());

    expect(tree.root.findByType(DateTimePicker)).toBeTruthy();
  });

  it('should set active step with userPassword', () => {
    const component = render(<AskUserBirthdate />, { wrapper: MockNavigatorContextProvider });
    const button = component.root.findByType(ButtonWithBackgroundColor).props;

    act(() => button.handlePress());
    expect(mockNavigatorContextValue.setActiveStep).toHaveBeenCalledWith(InscriptionStepper.UserPassword);
});
});