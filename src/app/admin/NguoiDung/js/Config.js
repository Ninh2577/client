import { initializeApp } from "firebase/app";
import { getStorege } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAtXg4mkxx1gic_VlvyxWcEloGZ6VFyymg",
  authDomain: "travel-e7f79.firebaseapp.com",
  projectId: "travel-e7f79",
  storageBucket: "travel-e7f79.appspot.com",
  messagingSenderId: "52519186637",
  appId: "1:52519186637:web:d0bb8aa8a499a7179b3984",
  measurementId: "G-HLNSGQZCPH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDB = getStorege(app);
