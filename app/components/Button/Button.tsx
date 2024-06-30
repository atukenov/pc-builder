import React from "react";
import styles from "./Button.module.css";

interface Props {
  label: string;
  onClick: () => void;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
}

const Button: React.FC<Props> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;
