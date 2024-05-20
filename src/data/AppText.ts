export const APP_TEXT = {
    authentification: {
        startup: {
            welcome_text: "Bienvenue sur Kasa",
            pickupLine1: "Gagnez du temps, économisez de l'énergie",
            pickupLine2: "Commencez dès aujourd'hui !",
            inscription_text: "S'inscrire",
            connexion_text: "Se connecter",
        },
        signUp: {
            create_account_text: 'Créez un compte',
            ask_email_text: 'Quel est votre courriel ?',
            ask_user_name_text: 'Quel est votre nom et prénom ?',
            ask_user_birthdate: 'Quel est votre date de naissance ?',
            ask_user_password: 'Quel mot de passe utiliserez-vous sur Kasa ?',
            email_signUp_text: 'S\'inscrire avec un email',
            social_media_signUp_text: 'ou inscrivez-vous avec',
            already_have_account_text: 'Appuyez ici si vous avez déja un compte !',
            continue_text: 'Continuer',
            create_account_button_text:'Créer mon compte',
            checkBox_text: 'J\'ai lu et j\'accepte les conditions générales d\'utilisation \n ainsi que la politique de protection des données personnelles',
            email_place_holder_text: 'johndoe@gmail.com',
            lastName_place_holder_text: 'Nom',
            firstName_place_holder_text: 'Prénom',
            birthdate_place_holder_text: '2023-01-01',
            birthdate_restriction_text: 'Vous devez avoir au moins 18 ans pour accéder à Kasa',
            password_place_holder_text: 'Mot de passe',
            password_not_match_error:'Les mots de passes ne correspondent pas',
            password_spec_error: 'Le mot de passe ne respecte pas les critères ci-dessous',
            email_error: 'Adresse courriel invalide',
            email_already_exist:'Votre adresse courriel existe déja',
            validate_email_error: 'Une erreur est survenue lors de la validation de votre adresse courriel',
            name_input_error:'Le champ doit avoir entre 3 et 20 caractères et ne doit contenir aucun caractère spécial',
            confirmPassword_place_holder_text: 'Confirmer le mot de passe',
            password_restriction_text:
                `Le mot de passe doit contenir au moins:
                
- Une lettre majuscule. ex: B
- Une lettre minuscule. ex: c
- Un chiffre. ex: 1
- Le mot de passe doit contenir au moins 8 caractères.
            
exemple de mot de passe: Azerty123456
            `
      ,

    },
    signIn: {
      question_forget_password: 'Mot de passe oublié ?',
      social_media_signIn_text: 'ou connectez-vous avec',
      not_have_account_text: "Appuyez ici si vous n'avez pas de compte !",
      message_bienvenue: "Bienvenue",
      adresse_email: "Adresse courriel",
      mot_de_passe: "Mot de passe",
      connexion: "Connexion",
      login_failed: "La connexion a échoué. Veuillez vérifier vos informations de connexion et réessayer.",
    },
  },
  booking: {
    address: 'Adresse',
    back_to_home: 'Retourner à l\'accueil',
    booking_error: 'Une erreur est survenue lors de la réservation',
    postal_code: 'Code postal',
    continue: 'Continuer',
    comments: 'Commentaires',
    no_comment: "Il n'y a aucun commentaire pour le moment",
    search_jobber: 'Rechercher des jobbers',
    services_done: 'A réalisé plus de',
    phone_number_placeholder: '819-XXX-XXXX',
    services: 'services',
    see_profile: 'Voir le profil',
    member_since: 'Membre depuis',
    no_jobbers: 'Malheureusement, il n\'y a aucun jobber disponible pour le moment. Veuillez réessayer plus tard.',
    languages: 'Langues parlées:',
    to_book: 'Réservez',
    skills: 'Habiletés et expériences',
    booking_success: 'Votre réservation a été effectuée avec succès!',
    steps: {
        photos: 'Souhaitez-vous ajouter des photos ? (optionnel)',
        estimated_duration: 'Estimation de la durée de service',
        address: 'Adresse de la prestation',
        pickupAddress: "Quel est l'adresse de départ ?",
        date: 'Quel jour vous convient le mieux ?',
        drop_address: "Quel est l'adresse d'arrivée ?",
        come_with_truck: "Le jobber doit-il venir avec son camion ?",
        own_vehicle: "Le jobber doit-il posséder un véhicule ?",
        own_mower: "Le jobber doit-il apporter sa propre tondeuse ?",
        frequency: "Fréquence de la demande ?",
        keep_duration: "Quand commence et se termine la garde ?",
        phone_number: "À quel numéro de téléphone le jobber pourra-t-il vous joindre ?",
        more_details: "Détails supplémentaires (optionnel)",
        jobber_counts: "Combien de prestataires vous faut-il ?",
        time: "Quelle heure vous convient le mieux ?",
        warning_time_min:"L'heure de début doit être après ou à 6h du matin",
        warning_time_max:"L'heure de fin doit être avant ou à 21h00",
        package_delivery: "À quel adresse le colis doit-il être livré ?",
        more_than_one_day: "Envisagez-vous une durée de service supérieure à une journée ?",
        date_debut: "À quel date souhaitez-vous que le service débute ?",
        date_fin: "À quel date souhaitez-vous que le service prenne fin ?"
    },

    stepKey:{
      jobber_counts: "jobberCounts",
      estimated_duration: "estimatedDuration",
      more_than_one_day:"moreThanOneDay"
    }
	},
  components: {
    show_more: 'Voir plus',
    show_less: 'Voir moins',
    retry: 'Réessayer',
  },
  errors: {
    service_details: 'Une erreur innatendue est survenue lors du chargement des détails du service.',
  },
  profile: {
    profile: 'Profil',
    manage_account: 'Gérer mon compte',
    notifications: 'Notifications',
    options: 'Options',
    member_since: 'Membre depuis',
    help: 'Aide et assistance',
    logout: 'Se déconnecter'
  },
  maintenance: {
    title: 'Sous développement',
    message: "Oops! 🛠️ Ce service est en cours de développement et n'est pas disponible pour le moment. Nous travaillons fort pour le rendre disponible sous peu. Revenez bientôt !",
  },
  services: {
    estimation_taux_horaire: 'Estimation du taux horaire:',
    estimation_duree_service: 'Estimation de la durée du service:',
    said: 'a dit:',
    start_booking: 'Commencer ma réservation',
  },
  homePage: {
    categorie_section: 'Nos univers de categories',
    popular_services_section: 'Nos services populaires',
    recommended_services_section: 'Services recommandés',
    search_placeHolder: 'Rechercher un service'
  },
  history:{
    reservations_title:'Mes réservations',
    service_name: 'Nom du service',
    date_hour_title:'Date et heure',
    adresse_title:'Adresse',
    button_title:'Gérer ma demande'
  }
}