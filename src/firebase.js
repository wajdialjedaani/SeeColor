import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA44VOJOUFEsku0CUzrwiogswSZrli38gs",
  authDomain: "seecolor-unt.firebaseapp.com",
  databaseURL: "https://seecolor-unt-default-rtdb.firebaseio.com",
  projectId: "seecolor-unt",
  storageBucket: "seecolor-unt.appspot.com",
  messagingSenderId: "675872053877",
  appId: "1:675872053877:web:f1a2f4113d578a0903763c"
};
// end Firebase Config

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app); 
const auth = getAuth(app);
export { auth }