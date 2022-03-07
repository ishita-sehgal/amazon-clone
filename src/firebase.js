// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";

// import { getFirestore} from 'firebase/firestore/lite';
// import firebase  from 'firebase'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore,query,collection,orderBy,getDocs,onSnapshot, doc,setDoc } from "firebase/firestore";
// import 'firebase/firestore'
// import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAhhWy1Q7JWpBSZ_IMKUShZ-Kh6OmiL96k",
  authDomain: "clone-a0990.firebaseapp.com",
  projectId: "clone-a0990",
  storageBucket: "clone-a0990.appspot.com",
  messagingSenderId: "79116650676",
  appId: "1:79116650676:web:5cf1cda947f413d2b06fe1",
  measurementId: "G-5DHMGLV8LC"
};


const app=initializeApp(firebaseConfig);
const auth=getAuth();
const db=getFirestore();
// export const projectAuth = firebase.auth();
// export const projectFirestore = firebase.firestore();

// export default { projectAuth, projectFirestore}

  // const app = initializeApp(firebaseConfig);
  // export const db = getFirestore(app);
  // export const auth=getAuth(app);

 
  // const db=app.firestore();
  // const auth=firebase.auth();
 

   export  {db,collection,orderBy,query,getDocs,onSnapshot,doc,setDoc,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword};