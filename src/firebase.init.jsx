
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDf__WwRihXUXbkgI0PTVrIYWnmf-oaKqE",
  authDomain: "pandami.firebaseapp.com",
  projectId: "pandami",
  storageBucket: "pandami.appspot.com",
  messagingSenderId: "258244102570",
  appId: "1:258244102570:web:31de0a8a0ccc47a01503d3",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
