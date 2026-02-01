import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import s from "./LoginForm.module.scss";

type AuthHandler = (email: string, password: string) => void | Promise<void>;

export default function LoginForm({ onLogin }: { onLogin: AuthHandler }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <section className={s.loginBackground}>
      <form className={s.loginForm} onSubmit={handleSubmit}>
        <h2 className={s.loginFormTitle}>Log in</h2>

        <div className={s.loginFormField}>
          <label className={s.loginFormLabel}>User name</label>
          <input
            type="text"
            className={s.loginFormInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={s.loginFormField}>
          <label className={s.loginFormLabel}>Password</label>
          <input
            type="password"
            className={s.loginFormInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={s.loginFormActions}>
          <button type="submit" className={s.loginFormSubmit}>
            Submit
          </button>

          <button
            type="button"
            className={s.loginFormCancel}
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
