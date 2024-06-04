import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
  secondary?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className,
  style = {},
  secondary = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-4 py-2 rounded  ${
        secondary
          ? "bg-darkBaseOfPrimary hover:bg-gray-200 text-primary font-medium"
          : "bg-primary hover:bg-blue-900 text-white font-medium"
      }  hover:ring-1 hover:ring-darkBaseOfPrimary focus:ring-2 focus:ring-darkBaseOfPrimary focus:outline-none transition-transform transform hover:scale-105 active:scale-100 drop-shadow-sm ${className}`}
      style={{ ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
