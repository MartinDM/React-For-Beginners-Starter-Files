import Rebase from 're-base';
import firebase from 'firebase';
import { initializeApp } from 'firebase/app';

const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyBIjfepOl-XgYa7WflGkSqo8FOo14F1zkc",
    authDomain: "martin-react-cotd.firebaseapp.com",
    databaseURL: "https://martin-react-cotd.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// Default export
export default base