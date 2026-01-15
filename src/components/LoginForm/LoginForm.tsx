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
    <form className={s.loginForm} onSubmit={handleSubmit}>
      <h2 className={s.title}>Log in</h2>

      <div className={s.field}>
        <label className={s.label}>User name</label>
        <input
          type="text"
          className={s.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={s.field}>
        <label className={s.label}>Password</label>
        <input
          type="password"
          className={s.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={s.actions}>
        <button type="submit" className={s.btnPrimary}>
          Submit
        </button>

        <button type="button" className={s.btnSecondary} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
