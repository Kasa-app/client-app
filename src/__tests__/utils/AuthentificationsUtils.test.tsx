import { isAgeOver18, isEmailValid, isPasswordValid } from "../../utils/AuthentificationUtils";

describe('When calling isEmailValid', () => {

    it('Given invalid email format should return false', () => {
      expect(isEmailValid({ email: "test" })).toEqual(false);
    });

    it('Given valid email format should return true', () => {
      expect(isEmailValid({ email: "test@gmail.com" })).toEqual(true);
    });

});

describe('When calling isAgeOver18', () => {

  it('Given dateBirth under 18 years should return false', () => {
    expect(isAgeOver18({ dateOfBirth: "2023-02-01" })).toEqual(false);
  });

  it('Given dateBirth over 18 years should return true', () => {
    expect(isAgeOver18({ dateOfBirth: "1998-05-21" })).toEqual(true);
  });

});

describe('When calling isPasswordValid', () => {

  it('Given password does not match length required should return false', () => {
    expect(isPasswordValid({ password: "Test" })).toEqual(false);
  });

  it('Given password does not have upperCase should return false', () => {
    expect(isPasswordValid({ password: "bonjour12345" })).toEqual(false);
  });

  it('Given password does not have lowerCase should return false', () => {
    expect(isPasswordValid({ password: "BONJOUR12345" })).toEqual(false);
  });

  it('Given password does not have digit number should return false', () => {
    expect(isPasswordValid({ password: "Bonjourtest" })).toEqual(false);
  });

  it('Given password does match all required specification', () => {
    expect(isPasswordValid({ password: "Bonjourtest12345" })).toEqual(true);
  });

});