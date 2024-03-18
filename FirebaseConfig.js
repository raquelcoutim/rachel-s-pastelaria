import { initializeApp } from "@react-native-firebase/app";
import { getAuth } from '@react-native-firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDYFlXA3Smb-HY0JpFjap0xj0bRpNNNBLo",
  authDomain: "pastelaria-login.firebaseapp.com",
  databaseURL: "https://pastelaria-login-default-rtdb.firebaseio.com",
  projectId: "pastelaria-login",
  storageBucket: "pastelaria-login.appspot.com",
  messagingSenderId: "708197995888",
  appId: "1:708197995888:web:df1a6c8d2c59009ca6ebb5"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);