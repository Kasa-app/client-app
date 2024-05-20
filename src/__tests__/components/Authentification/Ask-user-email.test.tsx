import { TextInput } from 'react-native';
import React, { useState } from 'react';
import { it } from '@jest/globals';
import { create, act } from 'react-test-renderer';
import AskUserEmail from "../../../components/Authentification/Ask-user-email/ask-user-email";
import ButtonWithBackgroundColor from '../../../components/Button-with-color-background/button';
import UserInput from '../../../components/User-input/user-input';
import { fireEvent, render } from '@testing-library/react-native';
import * as AuthentificationService from '../../../services/AuthentificationService';

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  return {
    KeyboardAwareScrollView: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  };
});

jest.mock('../../../services/AuthentificationService', () => ({
  validateClientEmailExists: jest.fn(() => ({
    emailExists: true,
  })),
}));

describe('AskUserEmailComponent', () => {

  const tree = create(<AskUserEmail />);

  it('snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  describe('When continue button is pressed', () => {

    describe('Given empty email address', () => {

      let component: any;
      let button: any;

      beforeEach(() => {
        component = render(<AskUserEmail />);
        fireEvent.changeText(component.root.findByType(TextInput), '');
        button = component.root.findByType(ButtonWithBackgroundColor).props;
      });

      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should set showError as true', async () => {
        jest.spyOn(AuthentificationService, 'validateClientEmailExists').mockResolvedValue({ emailExists: false });
        
        //act
        await act(async () => {
          await button.handlePress();
        });
        const userInput = component.root.findByType(UserInput).props;

        //expect
        expect(userInput.showError).toBe(true);
      });

      it('should disabled continue btn', () => {
        expect(button.shouldDisable).toBe(true);
      });

    });

    describe('Given invalid email address', () => {

      let component: any;
      let button: any;

      beforeEach(() => {
        component = render(<AskUserEmail />);
        fireEvent.changeText(component.root.findByType(TextInput), 'test');
        button = component.root.findByType(ButtonWithBackgroundColor).props;
      });

      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should set showError as true', async () => {
        jest.spyOn(AuthentificationService, 'validateClientEmailExists').mockResolvedValue({ emailExists: false });

        //act
        await act(async () => {
          await button.handlePress();
        });
        const userInput = component.root.findByType(UserInput).props;

        //expect
        expect(userInput.showError).toBe(true);
      });

      it('should enable continue btn', () => {
        expect(button.shouldDisable).toBe(false);
      });

    });

    describe('Given valid email address', () => {

      let component: any;
      let button: any;

      beforeEach(() => {
        component = render(<AskUserEmail />);
        fireEvent.changeText(component.root.findByType(TextInput), 'test@gmail.com');
        button = component.root.findByType(ButtonWithBackgroundColor).props;
      });

      it('should set showError as false', () => {
        //act
        act(() => button.handlePress());
        const userInput = component.root.findByType(UserInput).props;

        //expect
        expect(userInput.showError).toBe(false);
      });

      it('should enable continue btn', () => {
        expect(button.shouldDisable).toBe(false);
      });

    });

  });
});