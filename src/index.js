import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyD7q4p24N4gpOuumikUrfYuvtk78ASdyrg",
    authDomain: "chat-react-firebase-44dff.firebaseapp.com",
    projectId: "chat-react-firebase-44dff",
    storageBucket: "chat-react-firebase-44dff.appspot.com",
    messagingSenderId: "36561898477",
    appId: "1:36561898477:web:74fb8e638cd34c2e54f5e4",
    measurementId: "G-3MQBTE9CMX"
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
    <Context.Provider
        value={{
            firebase,
            auth,
            firestore
        }}
    >
        <App />
    </Context.Provider>,
    document.getElementById("root")
);
