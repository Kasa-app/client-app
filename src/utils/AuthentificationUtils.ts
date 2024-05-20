const isEmailValid = ({ email }: any) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

const isAgeOver18 = ({ dateOfBirth }: any) => {
  const dateParts = dateOfBirth.split("-");
  const day = parseInt(dateParts[2], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const year = parseInt(dateParts[0], 10);
  const birthDate = new Date(year, month, day);

  const currentDate = new Date();

  const ageDifference = currentDate.getTime() - birthDate.getTime();

  const ageInYears = ageDifference / (1000 * 60 * 60 * 24 * 365.25);

  return ageInYears >= 18;

}

const isPasswordValid = ({ password }: any) => {

  if (password.length < 8) {
    return false;
  }

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);

  return hasUppercase && hasLowercase && hasDigit;

}
export { isEmailValid, isAgeOver18, isPasswordValid }

