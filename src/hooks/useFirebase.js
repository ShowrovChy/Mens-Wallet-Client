import {
  getAuth,
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
  const auth = getAuth();

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
    setIsLoading(true);
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const UserInformation = (email, name) => {
    fetch("https://pure-inlet-82300.herokuapp.com/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, name }),
    })
      .then((res) => res.json())
      .then();
  };

  // Sign Out
  const handleUserLogOut = () => {
    signOut(auth).then((result) => {
      setUser({});
    });
  };
  return {
    handleUserSignInWithEmail,
    handleUserRegisterWithEmail,
    handleUserLogOut,
    UserInformation,
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
