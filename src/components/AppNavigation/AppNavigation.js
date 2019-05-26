import React from "react";
import { Link } from "react-router-dom";
import styles from "./AppNavigation.module.scss";

export default function AppNavigation() {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <button>Firebase Login Page</button>
      </Link>
      <Link to="/JabberMainPage">
        <button>Jabber Main Page</button>
      </Link>
      <Link to="/ProfilePage">
        <button>Edit Jabs</button>
      </Link>
    </div>
  );
}
