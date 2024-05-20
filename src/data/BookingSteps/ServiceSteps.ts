import { BOOKING_STEPS } from "./BookingSteps"

const GENERIC_STEPS = [
    BOOKING_STEPS.home_address,
    BOOKING_STEPS.date,
    BOOKING_STEPS.time,
    BOOKING_STEPS.phone_number,
    BOOKING_STEPS.estimated_duration,
    BOOKING_STEPS.photos,
    BOOKING_STEPS.more_details,
  ];

const DEMENAGEMENT_STEPS = [
    BOOKING_STEPS.home_address,
    BOOKING_STEPS.drop_address,
    BOOKING_STEPS.jobber_counts,
    BOOKING_STEPS.come_with_truck,
    ...GENERIC_STEPS.filter(step => step !== BOOKING_STEPS.home_address)
]

const ANIMAUX_STEPS = [
    BOOKING_STEPS.home_address,
    BOOKING_STEPS.more_than_one_day,
    BOOKING_STEPS.date_debut,
    BOOKING_STEPS.date_fin,
    BOOKING_STEPS.date,
    ...GENERIC_STEPS.filter(step => step !== BOOKING_STEPS.date && step !== BOOKING_STEPS.home_address)
]

const TRANSPORT_AEROPORT_COURSE_STEPS = [
    BOOKING_STEPS.pickup_address,
    BOOKING_STEPS.drop_address,
    ...GENERIC_STEPS.filter(step => step !== BOOKING_STEPS.home_address && step !== BOOKING_STEPS.estimated_duration),
    BOOKING_STEPS.own_vehicle
]

const ACCOMPAGEMENT_COURSE = [
    BOOKING_STEPS.pickup_address,
    BOOKING_STEPS.drop_address,
    ...GENERIC_STEPS.filter(step => step !== BOOKING_STEPS.home_address),
    BOOKING_STEPS.own_vehicle
]

const LIVRER_COLIS_STEPS = [
    BOOKING_STEPS.pickup_address,
    BOOKING_STEPS.drop_address,
    ...GENERIC_STEPS.filter(step => step !== BOOKING_STEPS.home_address && step !== BOOKING_STEPS.estimated_duration),
]

const AIDE_DOMICILE = [
    ...GENERIC_STEPS,
    BOOKING_STEPS.nbre_jobber,
    BOOKING_STEPS.ajout_photos,
]

const CUISINE = [
    BOOKING_STEPS.jobber_counts,
    ...GENERIC_STEPS,
]

const MENAGE = [
    ...AIDE_DOMICILE,
    BOOKING_STEPS.frequency,
]


const REPAS_MAISONS = [
    ...AIDE_DOMICILE,
    BOOKING_STEPS.address,
]

const TONTE_PELOUSE = [
    BOOKING_STEPS.own_mower,
    ...GENERIC_STEPS,
]

const COACH = [
    ...GENERIC_STEPS,
    BOOKING_STEPS.frequency,
]

export {

    GENERIC_STEPS, 
    DEMENAGEMENT_STEPS, 
    ANIMAUX_STEPS, 
    TRANSPORT_AEROPORT_COURSE_STEPS, 
    LIVRER_COLIS_STEPS,
    ACCOMPAGEMENT_COURSE,
    CUISINE
}