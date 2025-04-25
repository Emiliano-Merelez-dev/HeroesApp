import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";


import styles from './LoginPage.module.css';

export const LoginPage = () => {


  const { login } = useContext( AuthContext )
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'

    login('User-Test')

      navigate(lastPath, {
        replace: true,
      });

  }

  return (
    <div className={`${styles.background} container mt-5`} >
      <h1>Login</h1>
        <hr />

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <section>
            <img src="public/america.png" alt="capitan-America" />
            <img src="public/batman.png" alt="batman" />
            <img src="public/ironman.png" alt="ironman" />
            <img src="public/spiderman.png" alt="spiderman" />
            <img src="public/superman.png" alt="superman" />
            <img src="public/wolverine.png" alt="wolverine" />
          </section>

         <section>
            <img src="public/hulk.png" alt="hulk" />
            <img src="public/woman.png" alt="wonder-woman" />
            <img src="public/arrow.png" alt="arrow" />
            <img src="public/flash.png" alt="flash" />
            <img src="public/thor.png" alt="thor" />
            <img src="public/daredavil.png" alt="daredavil" />
         </section>

        </div>

        <hr /> 

        <button
         className="btn btn-primary"
         onClick={ onLogin }
        >
          Login
        </button>
    </div>
  )
}
