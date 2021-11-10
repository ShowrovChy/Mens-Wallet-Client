import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeAuthentication from "../pages/Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  //----- Log in with Google ------
  const handleUserGoogleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //----- Register with Email Password-----
  const handleUserRegisterWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in With Email Password
  const handleUserSignInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Observe User State

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  // Sign Out
  const handleUserLogOut = () => {
    signOut(auth).then((result) => {
      setUser({});
    });
  };
  return {
    handleUserGoogleLogIn,
    handleUserSignInWithEmail,
    handleUserRegisterWithEmail,
    handleUserLogOut,
    setUser,
    setError,
    updateProfile,
    auth,
    userName,
    setUserName,
    isLoading,
    user,
    error,
  };
};

export default useFirebase;
