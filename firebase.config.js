import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1CWGQu3MU1HujR6iyzkil9ypgRTHD_Sc",
  authDomain: "anchor-db651.firebaseapp.com",
  projectId: "anchor-db651",
  storageBucket: "anchor-db651.appspot.com",
  messagingSenderId: "986312083798",
  appId: "1:986312083798:web:6a4b67e20bf2ad013b6ef7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);