import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAeetzjQgzaeus-3uvcRJzSiLsNJrY5v4k",
  authDomain: "shopify-e-commerce.firebaseapp.com",
  projectId: "shopify-e-commerce",
  storageBucket: "shopify-e-commerce.appspot.com",
  messagingSenderId: "802846003385",
  appId: "1:802846003385:web:6c5c484d21b09432c10b68",
  measurementId: "G-10N15NGWW5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
