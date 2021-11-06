import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import initializeAuthentication from "../Pages/Firebase/Firebase.init";

initializeAuthentication();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(setIsLoading(false));
  };

  // get currently logged in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

   // user logout
   const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError("Something went wrong");
      })
      .finally(() => setIsLoading(false))
  };


  return {
    user,
    error,
    isLoading,
    signInWithGoogle,
    logOut
  };
};

export default UseFirebase;
