
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyASe1UpnfKYbDUA2e_A56Os4tjH0WlRYNA",
  authDomain: "ontirv.firebaseapp.com",
  projectId: "ontirv",
  storageBucket: "ontirv.appspot.com",
  messagingSenderId: "226374243398",
  appId: "1:226374243398:web:ef19bc3eae1a9f3a976647"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const fireBaseStorage = getStorage(fireBaseApp)

export default fireBaseStorage