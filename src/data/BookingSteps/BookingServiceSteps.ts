import { ACCOMPAGEMENT_COURSE, ANIMAUX_STEPS, CUISINE, DEMENAGEMENT_STEPS, GENERIC_STEPS, LIVRER_COLIS_STEPS, TRANSPORT_AEROPORT_COURSE_STEPS} from "./ServiceSteps";

export const BOOKING_SERVICE_STEPS = {
    demenagement_residentiel: {
      steps: [...DEMENAGEMENT_STEPS]
    },
    demenagement_et_ameublement: {
      steps: [...DEMENAGEMENT_STEPS]
    },
    aide_a_un_demenagement: {
      steps: [...DEMENAGEMENT_STEPS]
    },
    garde_de_chien: {
      steps: [...ANIMAUX_STEPS]
    },
    garde_de_chat: {
      steps: [...ANIMAUX_STEPS]
    },
    promenade_de_chien: {
      steps: [...ANIMAUX_STEPS]
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
      steps: [...TRANSPORT_AEROPORT_COURSE_STEPS]
    },
    accompagnement_courses: {
      steps: [...ACCOMPAGEMENT_COURSE]
    },
    livrer_un_colis: {
      steps: [...LIVRER_COLIS_STEPS]
    },
    cuisinier_personnel: {
      steps: [...CUISINE]
    },
    cours_de_cuisine_a_domicile: {
      steps: [...CUISINE]
    },
    livraison_de_repas_faits_maison: {
      steps: [...LIVRER_COLIS_STEPS]
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