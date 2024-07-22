// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDLaxfisBXbXxBEg8qo2q8EzfZz_-e_5bU',
  authDomain: 'blacksquare-68023.firebaseapp.com',
  projectId: 'blacksquare-68023',
  storageBucket: 'blacksquare-68023.appspot.com',
  messagingSenderId: '774963391404',
  appId: '1:774963391404:web:ff57f946c9c63c1f776809',
  measurementId: 'G-XWQ37H5TL1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics }; // Certifique-se de exportar 'auth'
