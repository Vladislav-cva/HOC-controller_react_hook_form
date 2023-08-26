import React, { useCallback } from "react";
/**
 * Hooks
 */
import { useNavigate } from "react-router-dom";
/**
 * Components
 */
import { MyButton } from "../../components/Button/Button";
/**
 *
 * Assets
 */
import css from "./style.module.css";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirectToLogIn = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={css.container}>
      <div className={css.leftSide}>
        <h1>Registration</h1>
        <MyButton
          nameOfButton="Registration"
          className={css.redirectButton}
          handleClick={handleRedirectToLogIn}
        />
      </div>
      <div className={css.rightSide}>
        <h1>Welcome to our web application</h1>
        <MyButton
          nameOfButton="LogIn"
          className={css.redirectButton}
          handleClick={handleRedirectToLogIn}
        />
      </div>
    </div>
  );
};
export default WelcomePage;
