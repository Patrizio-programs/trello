import "./App.css";
import React from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/compat/auth";
import "firebase/analytics";
import Main from "./components/Main";
import { useAuthState } from "react-firebase-hooks/auth";
import Public from "./Public";

firebase.initializeApp({
  apiKey: "AIzaSyD08ZFXuUFxMg9TWBgaOJUMC-IEUg7-OAQ",

  authDomain: "trello-clone-f265f.firebaseapp.com",

  projectId: "trello-clone-f265f",

  storageBucket: "trello-clone-f265f.appspot.com",

  messagingSenderId: "108076864694",

  appId: "1:108076864694:web:3274e0629e47167ce64217",

  measurementId: "G-8V6JG859HS"
});

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <Nav />
      </header>

      {user ? <Main /> : <Public />}
    </div>
  );
}

export function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
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

function Nav() {
  return (
    <div className="nav">
      <img className="nav-logo" src="https://raw.githubusercontent.com/Patrizio-programs/trello/7665f543bdd3db41535d8c2ba971f0ccc92f09a8/src/images/Trello.png" alt="Trello Logo" />
      <h1 className="nav_heading">Trello</h1>
      <div className="nav-button"></div>
      <SignOut />
    </div>
  );
}

export default App;
