import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../firebase";

export async function registerUser(email, password) {
  const result = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", result.user.uid), {
    uid: result.user.uid,
    email: result.user.email,
    createdAt: new Date().toISOString(),
  });

  return result.user;
}

export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
