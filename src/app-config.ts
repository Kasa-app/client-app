import { initializeApp } from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import { getFirestore,Firestore, initializeFirestore  } from 'firebase/firestore';

const AUTHENTIFICATION = {
	BASE_URL: "http://10.0.2.2/authentification-service/",

	api: {
		enregistrerClient: 'api/authentification/EnregistrerClient',
		getClientsProfile: 'api/authentification/getClientsProfile',
		getJobbersProfile: 'api/authentification/getJobbersProfile',
		loginClient: 'api/authentification/loginClient',
		validateCLientEmailExists: 'api/authentification/validateClientEmailExists',
	}
};

const MANAGEMENT = {
	BASE_URL: "http://10.0.2.2/management-service/",
	api: {
		getServiceDetails: 'api/data/serviceDetails',
		getCategoriesData: 'api/data/categories',
		getHomePageData: 'api/data/accueil',
		searchJobber: 'api/data/searchJobber',
	}
};

const AGENDA = {
	BASE_URL: "http://10.0.2.2/agenda-service",
	api: {
		addAppointment: '/api/v1/agenda/rendezVous',
		getAppointment: '/api/v1/agenda/rendezVous'
	}
};

//config temporaire, sera déplacé éventuellement déplacé vers l'un de nos microservices @TODO KS-184

const GOOGLE_CONFIG = {
	apiKey: "AIzaSyBHGtH3lIN4_L4IaXxdD7eFpNv0fV4sMfU"
}

//config temporaire, sera déplacé éventuellement déplacé vers l'un de nos microservices @TODO KS-184
const firebaseConfig = {
	apiKey: "AIzaSyDRs-kjFAmu47zAzyA136xnzPM7LBVpMBY",
	authDomain: "kasa-4458c.firebaseapp.com",
	projectId: "kasa-4458c",
	storageBucket: "kasa-4458c.appspot.com",
	messagingSenderId: "883269658361",
	appId: "1:883269658361:web:4167ad156ebcbc9219a428",
	measurementId: "G-NZDD48Q4QL"
  };

const firebaseapp = initializeApp(firebaseConfig);
initializeFirestore(firebaseapp, {experimentalForceLongPolling: true});

 const requestHeaders = {
	'Content-Type': 'application/json',
};

export {
	AUTHENTIFICATION,
	AGENDA,
	MANAGEMENT,
	requestHeaders,
	firebaseapp,
	GOOGLE_CONFIG
};



