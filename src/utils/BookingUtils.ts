const makeServiceKey = (serviceName: string): string => {
  const normalizedString = serviceName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const stringWithoutSlash = normalizedString.replace(/\//g, '_');
  const withoutQuotes = stringWithoutSlash.replace(/'/g, '');
  const withUnderscoresAndNoSpaces = withoutQuotes.replace(/\s/g, '_');
  return withUnderscoresAndNoSpaces.toLowerCase();
};

const isPhoneNumberValid = (phoneNumber: string): boolean => {
  const regex = /^(\+\d{1,4}[-\s]?)?(\d[-\s]?){10}$/;
  return regex.test(phoneNumber);
};

const formatDate = (inputDate: string): string => {
  const date = new Date(inputDate);

  const monthNames = [
    'Janvier', 'Février', 'Mars',
    'Avril', 'Mai', 'Juin', 'Juillet',
    'Août', 'Septembre', 'Octobre',
    'Novembre', 'Décembre',
  ];

  const formattedDate = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  return formattedDate;
};

const formatTime = (hours: number, minutes: number) => {
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  return `${formattedHours}:${formattedMinutes}:00`;
};

const isCanadianPostalCodeValid = (postalCode: string) => {
  const canadianPostalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  return canadianPostalCodeRegex.test(postalCode);
};

const increaseDurationByHalfAnHour = (duration: any) => {

  if (isMaxTimeExceeded(duration)) {
    duration.minutes = 0;
    return duration;
  }
  const newMinutes = duration.minutes + 30;
  let currentDuration;
  if (newMinutes < 60) {
    currentDuration = { ...duration, minutes: newMinutes };
  } else {
    currentDuration = { hours: duration.hours + 1, minutes: 0 };
  }

  return currentDuration;
};

const isMaxTimeExceeded = (duration: any) => {
  if (duration.hours >= 21 && duration.minutes >= 0) {
    return true;
  }
  return false;
}

const isMinTimeExceeded = (duration: any) => {

  if (duration.hours <= 6 && duration.minutes >= 0) {
    return true;
  }
  return false;
}

const decreaseDurationByHalfAnHour = (duration: any) => {
  const newMinutes = duration.minutes - 30;

  if (isMinTimeExceeded(duration)) {
    duration.minutes = 0;
    return duration;
  }

  let currentDuration = duration;

  if (newMinutes >= 0) {
    currentDuration = { ...duration, minutes: newMinutes };
  } else if (duration.hours > 0) {
    currentDuration = { hours: duration.hours - 1, minutes: 30 };
  }

  return currentDuration;
};

export {
  formatDate,
  formatTime,
  decreaseDurationByHalfAnHour,
  increaseDurationByHalfAnHour,
  isCanadianPostalCodeValid,
  isPhoneNumberValid,
  isMinTimeExceeded,
  isMaxTimeExceeded,
  makeServiceKey
};
