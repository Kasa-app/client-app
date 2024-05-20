import { Text, TextInput } from 'react-native';
import React from 'react';
import { it } from '@jest/globals';
import { create, act } from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { fireEvent } from 'react-native-testing-library';
import AskUserName from '../../../components/Authentification/Ask-user-name/ask-user-name';
import { NavigatorContext } from '../../../context/navigation/navigator-context';
import { InscriptionStepper } from '../../../models/stepper/InscriptionStepper';
import ButtonWithBackgroundColor from '../../../components/Button-with-color-background/button';
jest.mock('react-native-keyboard-aware-scroll-view', () => {
  return {
    KeyboardAwareScrollView: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  };
});

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

describe('AskUserName', () => {

  let tree: any

  beforeEach(() => {
    tree = render(<AskUserName />);
  });

  it('snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should call activeStep with userBirthDate when continue btn is pressed', () => {
    const component = render(<AskUserName />, { wrapper: MockNavigatorContextProvider });
    const button = component.root.findByType(ButtonWithBackgroundColor).props;

    act(() => button.handlePress());
    expect(mockNavigatorContextValue.setActiveStep).toHaveBeenCalledWith(InscriptionStepper.UserBirthdate);
  });

  it('when firstName is empty and lastName is not should disable continue btn', () => {
    const firstName = tree.root.findAllByType(TextInput)[0];
    const lastName = tree.root.findAllByType(TextInput)[1];

     fireEvent.changeText(firstName, '');
     fireEvent.changeText(lastName, 'test');

      const continueBtn = tree.root.findByType(ButtonWithBackgroundColor).props;
      expect(continueBtn.shouldDisable).toBe(true);
});

it('when lastName is empty and firstName is not should disable continue btn', () => {

    const firstName = tree.root.findAllByType(TextInput)[0];
    const lastName = tree.root.findAllByType(TextInput)[1];

     fireEvent.changeText(lastName, '');
     fireEvent.changeText(firstName, 'test');

      const continueBtn = tree.root.findByType(ButtonWithBackgroundColor).props;
      expect(continueBtn.shouldDisable).toBe(true);
});

it('when lastName and firstName are empty should disable continue btn', () => {

    const firstName = tree.root.findAllByType(TextInput)[0];
    const lastName = tree.root.findAllByType(TextInput)[1];

     fireEvent.changeText(lastName, '');
     fireEvent.changeText(firstName, '');

      const continueBtn = tree.root.findByType(ButtonWithBackgroundColor).props;
      expect(continueBtn.shouldDisable).toBe(true);
});

it('when lastName and firstName are not empty should enable continue btn', () => {

    const firstName = tree.root.findAllByType(TextInput)[0];
    const lastName = tree.root.findAllByType(TextInput)[1];

     fireEvent.changeText(lastName, 'test');
     fireEvent.changeText(firstName, 'test');

      const continueBtn = tree.root.findByType(ButtonWithBackgroundColor).props;
      expect(continueBtn.shouldDisable).toBe(false);
});


});