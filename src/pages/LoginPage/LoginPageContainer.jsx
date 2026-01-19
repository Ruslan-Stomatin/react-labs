import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

import LoginPage from "./LoginPage";

function LoginPageContainer() {
  const navigate = useNavigate();

  async function handleRegister(email, password) {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", result.user.uid), {
        email,
        createdAt: new Date().toISOString(),
      });

      navigate("/order");
    } catch (err) {
      alert(err.message);
    }
  }

  async function handleLogin(email, password) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/order");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <LoginPage onLogin={handleLogin} onRegister={handleRegister} />
  );
}

export default LoginPageContainer;
