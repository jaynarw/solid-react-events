import React from "react";
import cn from "classnames";
import styles from "./styles.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactChildren | React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
