import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6IKG6clu293hH-OInCnMAYYFb6H8TFic",
  authDomain: "todos-b5bf7.firebaseapp.com",
  projectId: "todos-b5bf7",
  storageBucket: "todos-b5bf7.appspot.com",
  messagingSenderId: "747750698166",
  appId: "1:747750698166:web:3fb1b40cb951ebef68ca17",
  measurementId: "G-PCNHV3DM0K",
  databaseURL: "https://todos-b5bf7-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;