
  // Import the functions you need from the SDKs you need
  import firebase from "firebase/app"
  import "firebase/firestore"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCjkoi72r85GwHez7P-vLr6T3EcXVZOtGk",
    authDomain: "tusbebidasonline.firebaseapp.com",
    projectId: "tusbebidasonline",
    storageBucket: "tusbebidasonline.appspot.com",
    messagingSenderId: "942541020743",
    appId: "1:942541020743:web:df4700435da497471e5b62"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
    export const getFirebase =()=>app;
    export const getFirestore = ()=>firebase.firestore(app);