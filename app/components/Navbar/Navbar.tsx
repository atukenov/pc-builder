"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link href="/">Brand</Link>
      </div>
      <div className={`${styles.links} ${isOpen ? styles.show : ""}`}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/build">Build up</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={styles.toggle} onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
