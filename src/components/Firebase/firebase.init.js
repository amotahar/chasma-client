import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

const initilaizeFirebase=()=>{
     initializeApp(firebaseConfig);

}
export default initilaizeFirebase;