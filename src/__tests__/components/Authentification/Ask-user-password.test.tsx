import { Text, TextInput } from 'react-native';
import React from 'react';
import { it } from '@jest/globals';
import { create, act } from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { fireEvent } from 'react-native-testing-library';
import CheckBox from '@react-native-community/checkbox';
import { ClientData } from '../../../models/dataType/ClientInfo';
import { HomepageData } from '../../../models/apiResponse/HomePageResponse';
import { AuthentificationContext } from '../../../context/authentification/authentification-context';
import AskUserPassword from '../../../components/Authentification/Ask-user-password/ask-user-password';
import ButtonWithBackgroundColor from '../../../components/Button-with-color-background/button';
import UserInput from '../../../components/User-input/user-input';

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  return {
    KeyboardAwareScrollView: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  };
});

const mockAuthentificationContextValue = {
  client: {} as ClientData,
  homePageData: {} as HomepageData,
  signUpData: {} as ClientData,
  setSignUpData: jest.fn(),
  setAuthHomePageData: () => { }
};

const MockAuthentificationProvider = ({ children }: any) => (
  <AuthentificationContext.Provider value={mockAuthentificationContextValue}>
    {children}
  </AuthentificationContext.Provider>
);

describe('AskUserPassword', () => {

  let tree: any
  let mockHandleSignUp: any

  beforeEach(() => {
    mockHandleSignUp = jest.fn();
    tree = render(<AskUserPassword handleSignUp={mockHandleSignUp} />);
  });

  it('snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  it('when password, confirmPassword and checkBox are empty should disable continue btn', () => {
    const password = tree.root.findAllByType(TextInput)[0];
    const confirmPassword = tree.root.findAllByType(TextInput)[1];
    tree.root.findByType(CheckBox).props.value = false;

    fireEvent.changeText(password, '');
    fireEvent.changeText(confirmPassword, '');

    const continueBtn = tree.root.findByType(ButtonWithBackgroundColor).props;
    expect(continueBtn.shouldDisable).toBe(true);
  });

  it('when checkBox is empty and password,confirmPassword are not should disable continue btn', () => {

    const password = tree.root.findAllByType(TextInput)[0];
    const confirmPassword = tree.root.findAllByType(TextInput)[1];
    tree.root.findByType(CheckBox).props.value = false;

    fireEvent.changeText(password, 'test');
    fireEvent.changeText(confirmPassword, 'test');

    const continueBtn = tree.root.findByType(ButtonWithBackgroundColor).props;
    expect(continueBtn.shouldDisable).toBe(true);
  });


  it('when password, confirmPassword and checkBox are not empty should enable continue btn', () => {

    const password = tree.root.findAllByType(TextInput)[0];
    const confirmPassword = tree.root.findAllByType(TextInput)[1];
    act(() => tree.root.findByType(CheckBox).props.onChange());

    fireEvent.changeText(password, 'test');
    fireEvent.changeText(confirmPassword, 'test');

    const continueBtn = tree.root.findByType(ButtonWithBackgroundColor).props;
    expect(continueBtn.shouldDisable).toBe(false);
  });


  describe('When password is not equal to confirmPassword and continueBtn is pressed', () => {

    beforeEach(() => {
      const password = tree.root.findAllByType(TextInput)[0];
      const confirmPassword = tree.root.findAllByType(TextInput)[1];
      fireEvent.changeText(password, 'Test12345');
      fireEvent.changeText(confirmPassword, 'Test1234');
    })

    it('should show error', () => {
      const continueBtn = tree.root.findByType(ButtonWithBackgroundColor).props;
      act(() => continueBtn.handlePress());
      expect(tree.root.findAllByType(UserInput)[1].props.showError).toBe(true);
    });

    it('should not call handleSignUp', () => {
      const continueBtn = tree.root.findByType(ButtonWithBackgroundColor).props;
      act(() => continueBtn.handlePress());
      expect(mockHandleSignUp).not.toHaveBeenCalled();
    });

    it('should not call setSignUpData', () => {
      const component = render(<AskUserPassword />, { wrapper: MockAuthentificationProvider });
      const continueBtn = component.root.findByType(ButtonWithBackgroundColor).props;
      act(() => continueBtn.handlePress());
      expect(mockAuthentificationContextValue.setSignUpData).not.toHaveBeenCalled()
    })

  });


  describe('When password is equal to confirmPassword and continueBtn is pressed', () => {

    beforeEach(() => {
      const password = tree.root.findAllByType(TextInput)[0];
      const confirmPassword = tree.root.findAllByType(TextInput)[1];
      fireEvent.changeText(password, 'Test12345');
      fireEvent.changeText(confirmPassword, 'Test12345');
    })

    it('should not diplay error', () => {
      const continueBtn = tree.root.findByType(ButtonWithBackgroundColor).props;
      act(() => continueBtn.handlePress());
      expect(tree.root.findAllByType(UserInput)[1].props.showError).toBe(false);
    });

    it('should call handleSignUp', () => {
      const continueBtn = tree.root.findByType(ButtonWithBackgroundColor).props;
      act(() => continueBtn.handlePress());
      expect(mockHandleSignUp).toHaveBeenCalled();
    });

    it('should call setSignUpData', () => {

      const component = render(<AskUserPassword handleSignUp={mockHandleSignUp} />, { wrapper: MockAuthentificationProvider });
      const password = component.root.findAllByType(TextInput)[0];
      const confirmPassword = component.root.findAllByType(TextInput)[1];
      fireEvent.changeText(password, 'Test12345');
      fireEvent.changeText(confirmPassword, 'Test12345');

      const continueBtn = component.root.findByType(ButtonWithBackgroundColor).props;
      act(() => continueBtn.handlePress());
      expect(mockAuthentificationContextValue.setSignUpData).toHaveBeenCalled()
    });

  });
});