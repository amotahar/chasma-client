import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireBaseConfig";

const fireBaseInitFun= ()=>{
    initializeApp(firebaseConfig);
}

export default fireBaseInitFun;