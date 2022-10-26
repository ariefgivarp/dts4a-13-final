
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2_Hl1007Piqdc0O_FDXxWC69r20-_UIE",
  authDomain: "authentication-dts4a-13-final.firebaseapp.com",
  projectId: "authentication-dts4a-13-final",
  storageBucket: "authentication-dts4a-13-final.appspot.com",
  messagingSenderId: "66558117472",
  appId: "1:66558117472:web:445aaf0d68b6592fb76505",
  measurementId: "G-RXNCP6Q7RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerDenganEmailDanPassword = async (email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        alert("User yang teregistrasi dan berhasil login adalah ", response.user);
    } catch (err) {
        alert(err);
        alert("error code auth ", err.code);
        alert("error message auth ", err.message);
    }
};

const loginDenganEmailDanPassword = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword (
            auth, 
            email,
            password,
        );

        alert("User yang berhasil login adalah ", userCredential.user);
    } catch (err) {
        alert(err);
        alert("error code auth ", err.code);
        alert("error message auth ", err.message);
    }
};

const keluarDariApps = async () => {
    try {
        await signOut(auth);
    } catch (err){
        alert(err);
    }
}

export {
    auth,
    registerDenganEmailDanPassword,
    keluarDariApps, 
    loginDenganEmailDanPassword,
};