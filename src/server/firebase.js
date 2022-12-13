import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "-OInCnMAYYFb6H8TFic",
  authDomain: "todos-.firebaseapp.com",
  projectId: "todos-",
  storageBucket: "todos-.appspot.com",
  messagingSenderId: "",
  appId: "1:747750698166:web:",
  measurementId: "G-",
  databaseURL: "https://-b5bf7-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;