import React, { useRef, useState } from "react";
import "./App.css";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import UserPage from './pages/UserPage';
import WineList from './pages/WineList.js';

firebase.initializeApp({
  apiKey: "AIzaSyAOWBoSppBDMpf0eYbocuAXES0tW6qQ5rE",
  authDomain: "watch-party-224bc.firebaseapp.com",
  databaseURL: "https://watch-party-224bc-default-rtdb.firebaseio.com",
  projectId: "watch-party-224bc",
  storageBucket: "watch-party-224bc.appspot.com",
  messagingSenderId: "781420058248",
  appId: "1:781420058248:web:1e1d71d6aff65b8e9db13d",
  measurementId: "G-YDTN67SC7W",
});

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>IWine</h1>
        <SignIn />
        <SignOut />
      </header>

      <section>{user ? <UserPage /> : <WineList />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    !auth.currentUser && (
      <>
        <button className="sign-out" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </>
    )
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}



export default App;
