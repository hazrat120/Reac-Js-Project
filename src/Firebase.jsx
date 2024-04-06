import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//firebase configuration
const app = initializeApp({
  apiKey: import.meta.env.REACT_APP_API_KEY,
  authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_STRAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_APP_ID,
});

export const auth = getAuth(app);

export default app;
