import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import LoginPage from "./LoginPage";

type AuthHandler = (email: string, password: string) => Promise<void>;

export default function LoginPageContainer() {
  const navigate = useNavigate();

  const handleLogin: AuthHandler = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/order");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error";
      alert(message);
    }
  };

  return <LoginPage onLogin={handleLogin} />;
}
