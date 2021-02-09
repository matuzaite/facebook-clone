import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDuH11bBeOStj1gxFbJvCPLlnJnh_SoYHs",
  authDomain: "facebook-clone-4efcc.firebaseapp.com",
  projectId: "facebook-clone-4efcc",
  storageBucket: "facebook-clone-4efcc.appspot.com",
  messagingSenderId: "784265009417",
  appId: "1:784265009417:web:f7455f9fbbbad5fe0f9bd8",
  measurementId: "G-Z5KSVEK0TR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;