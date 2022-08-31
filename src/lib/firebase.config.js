import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCXJ3QJh1pDIBdmAq1r8UcmNeYrJF-_q6M',
	authDomain: 'cahoot-admin.firebaseapp.com',
	databaseURL: 'https://cahoot-admin.firebaseio.com',
	projectId: 'cahoot-admin',
	storageBucket: 'cahoot-admin.appspot.com',
	messagingSenderId: '462820948040',
	appId: '1:462820948040:web:cf09e68a812ff309bd407d'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
