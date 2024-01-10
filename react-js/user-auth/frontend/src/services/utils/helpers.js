import { auth, googleProvider } from "./firebase";

import { signInWithPopup } from "firebase/auth";

export const googleLoginPopup = async () => {
  try {
    return await signInWithPopup(auth, googleProvider);
  } catch (error) {
    throw new Error(error);
  }
};
