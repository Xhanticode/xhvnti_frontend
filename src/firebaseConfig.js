import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVZNxY50UCU6xhDavK5-Hl1YD6xIMBhQk",
    authDomain: "xhvnti-login.firebaseapp.com",
    projectId: "xhvnti-login",
    storageBucket: "xhvnti-login.appspot.com",
    messagingSenderId: "127238917335",
    appId: "1:127238917335:web:ce8637a4204099845a3492",
    measurementId: "G-W5GX1105ZM"
  };

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp