import React from "react";
import { Link } from "react-router-dom";
import styles from "./AppNavigation.module.scss";

export default function AppNavigation() {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <button>Login</button>
      </Link>
      <Link to="/JabberMainPage">
        <button>Jab</button>
      </Link>
      <Link to="/ProfilePage">
        <button>Edit</button>
      </Link>
    </div>
  );
}
