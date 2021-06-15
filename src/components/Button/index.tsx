import React from "react";
import cn from "classnames";
import styles from "./styles.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactChildren | React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button type="button" className={cn(styles.button, className)}>
      {children}
    </button>
  );
};
