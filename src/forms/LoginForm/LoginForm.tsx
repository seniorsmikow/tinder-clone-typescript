import { useState } from "react";
import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  const [email, setEmail] = useState<null | string>(null);
  const [password, setPassword] = useState<null | string>(null);
  const [confirmPassword, setConfirmPassword] = useState<null | string>(null);
  const [error, setError] = useState<null | string>(null);

  const isSighUp = true; // Определить для формы!

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (isSighUp && password !== confirmPassword) {
        setError("Пароли не совпадают");
      }
      console.log("Передаём данные на сервер", email, password);
    } catch (error: any) {
      // определить тип error!
      alert(error.message);
    }
  };

  return (
    <div className={styles.form__wrapper}>
      <h3>Войти</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            setEmail(event.currentTarget.value)
          }
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            setPassword(event.currentTarget.value)
          }
        />
        {isSighUp && (
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirm password"
            required={true}
            onChange={(event: React.FormEvent<HTMLInputElement>) =>
              setConfirmPassword(event.currentTarget.value)
            }
          />
        )}
        <input type="submit" />
        <p>{error}</p>
      </form>
    </div>
  );
};
