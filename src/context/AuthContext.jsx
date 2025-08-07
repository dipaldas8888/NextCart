import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("[LOGIN SUCCESS] Firebase user:", userCredential.user);
      return userCredential;
    } catch (error) {
      console.error("[LOGIN ERROR]", error);
      throw error;
    }
  };

  const register = async (email, name, password) => {
    try {
      // Send to backend for server-side creation (via Firebase Admin SDK)
      const response = await axios.post("http://localhost:8080/auth/register", {
        name,
        email,
        password,
        // Add phoneNumber if needed; role defaults to "USER" on backend
      });
      console.log("[BACKEND REGISTERED]", response.data);

      // After successful backend creation, auto-login client-side
      return await login(email, password);
    } catch (error) {
      console.error("[REGISTER ERROR]", error);
      throw error;
    }
  };

  const logout = () => signOut(auth);

  const getIdToken = async () => {
    if (user) {
      return await user.getIdToken();
    }
    return null;
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, logout, getIdToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
