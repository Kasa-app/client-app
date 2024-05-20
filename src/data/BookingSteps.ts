import { APP_TEXT } from "./AppText";
import TextArea from "../components/Booking/MoreDetails/MoreDetails";
import Empty from "../components/Empty/Empty";
import TimeInput from "../components/Booking/TimeInput/time-input";
import Input from "../components/Booking/PhoneNumber/phoneNumber";
import DateTimePicker from "../components/Booking/DateTimePicker/date-time-picker";
import { isCanadianPostalCodeValid, isPhoneNumberValid } from "../utils/BookingUtils";
import { BookingStepType } from "../models/booking/BookingStepType";
import AddressInput from "../components/Booking/AddressInput/address-input";
import PhoneNumber from "../components/Booking/PhoneNumber/phoneNumber";

const BOOKING_STEPS: Record<string, BookingStepType> = {
  photos: {
    stepKey: 'photos',
    stepName: APP_TEXT.booking.steps.photos,
    component: Empty,
    inputProps: {},
    onValidate: undefined,
  },
  estimated_duration: {
    stepKey: 'estimatedDuration',
    stepName: APP_TEXT.booking.steps.estimated_duration,
    component: TimeInput,
    inputProps: { isEstimatedService: true },
    onValidate: undefined,
  },
  address: {
    stepKey: 'address',
    stepName: APP_TEXT.booking.steps.address,
    component: AddressInput,
    inputProps: { postalCodeKey: 'postalCode' },
    onValidate: undefined,
  },
  date: {
    stepKey: 'date',
    stepName: APP_TEXT.booking.steps.date,
    component: DateTimePicker,
    inputProps: {},
    onValidate: undefined,
  },
  pickup_address: {
    stepKey: 'pickupAddress',
    stepName: APP_TEXT.booking.steps.pickup_address,
    component: Input,
    inputProps: {},
    onValidate: undefined,
  },
  come_with_truck: {
    stepKey: 'comeWithTruck',
    stepName: APP_TEXT.booking.steps.come_with_truck,
    component: Empty,
    inputProps: {},
    onValidate: undefined,
  },
  own_vehicle: {
    stepKey: 'ownVehicle',
    stepName: APP_TEXT.booking.steps.own_vehicle,
    component: Empty,
    inputProps: {},
    onValidate: undefined,
  },
  own_mower: {
    stepKey: 'ownMower',
    stepName: APP_TEXT.booking.steps.own_mower,
    component: Empty,
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
    component: Empty,
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

const GENERIC_STEPS = [
  BOOKING_STEPS.date,
  BOOKING_STEPS.time,
  BOOKING_STEPS.address,
  BOOKING_STEPS.phone_number,
  BOOKING_STEPS.more_details
];

export const BOOKING_SERVICE_STEPS = {
  demenagement_residentiel: {
    steps: [...GENERIC_STEPS]
  },
  demenagement_et_ameublement: {
    steps: [...GENERIC_STEPS]
  },
  aide_a_un_demenagement: {
    steps: [...GENERIC_STEPS]
  },
  garde_de_chien: {
    steps: [...GENERIC_STEPS]
  },
  garde_de_chat: {
    steps: [...GENERIC_STEPS]
  },
  promenade_de_chien: {
    steps: [...GENERIC_STEPS]
  },
  toilettage_pour_chien: {
    steps: [...GENERIC_STEPS]
  },
  renovation_de_salle_de_bain: {
    steps: [...GENERIC_STEPS]
  },
  renovation_de_sous_sol: {
    steps: [...GENERIC_STEPS]
  },
  renovation_de_linterieur: {
    steps: [...GENERIC_STEPS]
  },
  renovation_de_lexterieur: {
    steps: [...GENERIC_STEPS]
  },
  peinture_interieure: {
    steps: [...GENERIC_STEPS]
  },
  decoration_interieure: {
    steps: [...GENERIC_STEPS]
  },
  transport_vers_laeroport: {
    steps: [...GENERIC_STEPS]
  },
  courses: {
    steps: [...GENERIC_STEPS]
  },
  livrer_un_colis: {
    steps: [...GENERIC_STEPS]
  },
  cuisinier_personnel: {
    steps: [...GENERIC_STEPS]
  },
  cours_de_cuisine_a_domicile: {
    steps: [...GENERIC_STEPS]
  },
  livraison_de_repas_faits_maison: {
    steps: [...GENERIC_STEPS]
  },
  coiffeur_coiffeuse: {
    steps: [...GENERIC_STEPS]
  },
  maquilleur_maquilleuse: {
    steps: [...GENERIC_STEPS]
  },
  reparation_de_plombeire: {
    steps: [...GENERIC_STEPS]
  },
  reparation_de_toiture: {
    steps: [...GENERIC_STEPS]
  },
  reparation_de_chauffage_et_de_climatisation: {
    steps: [...GENERIC_STEPS]
  },
  reparation_delectromenagers: {
    steps: [...GENERIC_STEPS]
  },
  machine_a_laver: {
    steps: [...GENERIC_STEPS]
  },
  lave_vaisselle: {
    steps: [...GENERIC_STEPS]
  },
  refrigerateur: {
    steps: [...GENERIC_STEPS]
  },
  four: {
    steps: [...GENERIC_STEPS]
  },
  pose_dune_television: {
    steps: [...GENERIC_STEPS]
  },
  serrure: {
    steps: [...GENERIC_STEPS]
  },
  abris_de_jardin: {
    steps: [...GENERIC_STEPS]
  },
  trampoline: {
    steps: [...GENERIC_STEPS]
  },
  montage_de_meubles: {
    steps: [...GENERIC_STEPS]
  },
  montage_de_lit: {
    steps: [...GENERIC_STEPS]
  },
  montage_de_canape: {
    steps: [...GENERIC_STEPS]
  },
  menage_a_domicile: {
    steps: [...GENERIC_STEPS]
  },
  nettoyage_de_vitres: {
    steps: [...GENERIC_STEPS]
  },
  nettoyage_de_tapis: {
    steps: [...GENERIC_STEPS]
  },
  tondre_la_pelouse: {
    steps: [...GENERIC_STEPS]
  },
  pose_de_gazon: {
    steps: [...GENERIC_STEPS]
  },
  ramassage_de_feuilles: {
    steps: [...GENERIC_STEPS]
  },
  deneiger: {
    steps: [...GENERIC_STEPS]
  },
  entretien_de_piscine_exterieur: {
    steps: [...GENERIC_STEPS]
  },
  coaching_sportif_personnel: {
    steps: [...GENERIC_STEPS]
  },
  coaching_en_nutrition: {
    steps: [...GENERIC_STEPS]
  },
  coaching_en_yoga: {
    steps: [...GENERIC_STEPS]
  },
};
