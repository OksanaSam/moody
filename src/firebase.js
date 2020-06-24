import firebase from 'firebase/app';
import 'firebase/database';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBiob7vv7TgF5cSLbqB5POCOaoINgT7x5g",
    authDomain: "moody-ca507.firebaseapp.com",
    databaseURL: "https://moody-ca507.firebaseio.com",
    projectId: "moody-ca507",
    storageBucket: "moody-ca507.appspot.com",
    messagingSenderId: "699133095599",
    appId: "1:699133095599:web:38458b45ba871577e32e5a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;