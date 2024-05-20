import { APP_TEXT } from "../AppText";
import TextArea from "../../components/Booking/MoreDetails/MoreDetails";
import Empty from "../../components/Empty/Empty";
import TimeInput from "../../components/Booking/TimeInput/time-input";
import Input from "../../components/Booking/PhoneNumber/phoneNumber";
import DateTimePicker from "../../components/Booking/DateTimePicker/date-time-picker";
import { BookingStepType } from "../../models/booking/BookingStepType";
import AddressInput from "../../components/Booking/AddressInput/address-input";
import PhoneNumber from "../../components/Booking/PhoneNumber/phoneNumber";
import { Question } from "../../components/Booking/Questions/Question";
import { Count } from "../../components/Booking/Count/count";
import { AddingPictures } from "../../components/Booking/AddingPictures/addingPictures";

export const BOOKING_STEPS: Record<string, BookingStepType> = {
  photos: {
    stepKey: 'photos',
    stepName: APP_TEXT.booking.steps.photos,
    component: AddingPictures,
    inputProps: {},
    onValidate: undefined,
  },

  estimated_duration: {
    stepKey: 'estimatedDuration',
    stepName: APP_TEXT.booking.steps.estimated_duration,
    component: Count,
    inputProps: { isEstimatedService: true },
    onValidate: undefined,
  },

  home_address: {
    stepKey: 'address',
    stepName: APP_TEXT.booking.steps.address,
    component: AddressInput,
    inputProps: { postalCodeKey: 'postalCode' },
    onValidate: undefined,
  },

  pickup_address: {
    stepKey: 'pickupAddress',
    stepName: APP_TEXT.booking.steps.pickupAddress,
    component: AddressInput,
    inputProps: { postalCodeKey: 'postalCode' },
    onValidate: undefined,
  },

  date: {
    stepKey: 'dateDebut',
    stepName: APP_TEXT.booking.steps.date,
    component: DateTimePicker,
    inputProps: {},
    onValidate: undefined,
  },

  drop_address: {
    stepKey: 'dropAddress',
    stepName: APP_TEXT.booking.steps.drop_address,
    component: AddressInput,
    inputProps: {},
    onValidate: undefined,
  },

  come_with_truck: {
    stepKey: 'comeWithTruck',
    stepName: APP_TEXT.booking.steps.come_with_truck,
    component: Question,
    inputProps: {},
    onValidate: undefined,
  },

  date_debut: {
   stepKey:'dateDebut',
   stepName: APP_TEXT.booking.steps.date_debut,
   component:DateTimePicker,
   inputProps: {},
   onValidate: undefined
  },

  date_fin: {
    stepKey:'dateFin',
    stepName: APP_TEXT.booking.steps.date_fin,
    component:DateTimePicker,
    inputProps: {},
    onValidate: undefined
   },

  more_than_one_day: {
    stepKey: 'moreThanOneDay',
    stepName: APP_TEXT.booking.steps.more_than_one_day,
    component: Question,
    inputProps: {},
    onValidate: undefined,
  },

  own_vehicle: {
    stepKey: 'ownVehicle',
    stepName: APP_TEXT.booking.steps.own_vehicle,
    component: Question,
    inputProps: {},
    onValidate: undefined,
  },

  own_mower: {
    stepKey: 'ownMower',
    stepName: APP_TEXT.booking.steps.own_mower,
    component: Question,
    inputProps: {},
    onValidate: undefined,
  },

  frequency: {
    stepKey: 'frequency',
    stepName: APP_TEXT.booking.steps.frequency,
    component: Empty,
    inputProps: {},
    onValidate: undefined,
  },
  keep_duration: {
    stepKey: 'keepDuration',
    stepName: APP_TEXT.booking.steps.keep_duration,
    component: Empty,
    inputProps: {},
    onValidate: undefined,
  },
  phone_number: {
    stepKey: 'phoneNumber',
    stepName: APP_TEXT.booking.steps.phone_number,
    component: PhoneNumber,
    inputProps: { placeholder: APP_TEXT.booking.phone_number_placeholder },
    onValidate: undefined,
  },
  more_details: {
    stepKey: 'moreDetails',
    stepName: APP_TEXT.booking.steps.more_details,
    component: TextArea,
    inputProps: {},
    onValidate: undefined,
  },
  jobber_counts: {
    stepKey: 'jobberCounts',
    stepName: APP_TEXT.booking.steps.jobber_counts,
    component: Count,
    inputProps: {},
    onValidate: undefined,
  },
  time: {
    stepKey: 'time',
    stepName: APP_TEXT.booking.steps.time,
    component: TimeInput,
    inputProps: {},
    onValidate: undefined,
  },
  package_delivery: {
    stepKey: 'packageDelivery',
    stepName: APP_TEXT.booking.steps.package_delivery,
    component: Input,
    inputProps: {},
    onValidate: undefined,
  },
};