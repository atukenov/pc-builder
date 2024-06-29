"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <h1>PC Builder</h1>
      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="#setups">Setups</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ""}`}
        onClick={toggleMobileMenu}
      >
        <span className={styles.hamburgerIcon}></span>
      </button>
    </header>
  );
};

export default Header;
