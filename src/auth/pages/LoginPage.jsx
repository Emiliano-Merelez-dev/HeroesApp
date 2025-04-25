import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

import styles from './LoginPage.module.css';

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login('User-Test');
    navigate(lastPath, {
      replace: true,
    });
  }

  return (
    <div className={`${styles.background} container mt-5`}>
      <h1>Login</h1>
      <hr />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <section>
          <img src="/america.png" alt="capitan-America" />
          <img src="/batman.png" alt="batman" />
          <img src="/ironman.png" alt="ironman" />
          <img src="/spiderman.png" alt="spiderman" />
          <img src="/superman.png" alt="superman" />
          <img src="/wolverine.png" alt="wolverine" />
        </section>

        <section>
          <img src="/hulk.png" alt="hulk" />
          <img src="/woman.png" alt="wonder-woman" />
          <img src="/arrow.png" alt="arrow" />
          <img src="/flash.png" alt="flash" />
          <img src="/thor.png" alt="thor" />
          <img src="/daredavil.png" alt="daredavil" />
        </section>
      </div>

      <hr />

      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
