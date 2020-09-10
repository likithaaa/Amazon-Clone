import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCY1JkdZJ14ezTuw0FRbec27qjlC90A0Ic',
  authDomain: 'clone-31707.firebaseapp.com',
  databaseURL: 'https://clone-31707.firebaseio.com',
  projectId: 'clone-31707',
  storageBucket: 'clone-31707.appspot.com',
  messagingSenderId: '591455599649',
  appId: '1:591455599649:web:eed426ed237885d1bf3760',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
