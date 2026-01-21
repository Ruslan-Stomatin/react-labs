import { useState, type FormEvent } from "react";
import s from "./LoginForm.module.scss";
import { useNavigate } from "react-router-dom";

type AuthHandler = (email: string, password: string) => Promise<void> | void;

type LoginFormProps = {
  onLogin: AuthHandler;
};

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onLogin(email, password);
  }

  function handleCancel() {
    navigate("/");
  }

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
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
    </section>
  );
}
