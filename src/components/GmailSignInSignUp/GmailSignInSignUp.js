import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { firebaseConfig } from "../../firebaseConfig";
import LogoGmail from "../../assets/gmail.svg";

firebase.initializeApp(firebaseConfig);

const GmailSignInSignUp = () => {
  const handleSignInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
      // Handle successful sign-in
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center ">
        <button
          onClick={handleSignInWithGoogle}
          className="flex items-center bg-white border border-blue-500 text-black font-bold py-2 px-4 rounded gap-2"
        >
          <img src={LogoGmail} alt="LogoGmail" className="w-6 h-6" />
          Sign In with Gmail
        </button>
      </div>
    </div>
  );
};

export default GmailSignInSignUp;
