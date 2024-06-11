import React from "react";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  bold?: boolean;
  medium?: boolean;
};

export const Heading1: React.FC<TypographyProps> = ({
  children,
  className,
  bold,
  medium,
}) => {
  return (
    <h1
      className={`xs:text-3xl lg:text-4xl  ${
        bold ? "font-bold" : medium ? "font-medium" : "font-normal"
      } ${className}`}
    >
      {children}
    </h1>
  );
};

export const Heading2: React.FC<TypographyProps> = ({
  children,
  className,
  bold,
  medium,
}) => {
  return (
    <h2
      className={`xs:text-2xl lg:text-3xl ${
        bold ? "font-bold" : medium ? "font-medium" : "font-normal"
      } ${className}`}
    >
      {children}
    </h2>
  );
};

export const Heading3: React.FC<TypographyProps> = ({
  children,
  className,
  bold,
  medium,
}) => {
  return (
    <h3
      className={`xs:text-xl lg:text-2xl ${
        bold ? "font-bold" : medium ? "font-medium" : "font-normal"
      } ${className}`}
    >
      {children}
    </h3>
  );
};

export const Heading4: React.FC<TypographyProps> = ({
  children,
  className,
  bold,
  medium,
}) => {
  return (
    <h4
      className={`xs:text-lg lg:text-xl ${
        bold ? "font-bold" : medium ? "font-medium" : "font-normal"
      } ${className}`}
    >
      {children}
    </h4>
  );
};

export const Heading5: React.FC<TypographyProps> = ({
  children,
  className,
  bold,
  medium,
}) => {
  return (
    <h5
      className={`text-lg ${
        bold ? "font-bold" : medium ? "font-medium" : "font-normal"
      } ${className}`}
    >
      {children}
    </h5>
  );
};

export const Heading6: React.FC<TypographyProps> = ({
  children,
  className,
  bold,
  medium,
}) => {
  return (
    <h6
      className={`text-base text-black ${
        bold ? "font-bold" : medium ? "font-medium" : "font-normal"
      } ${className}`}
    >
      {children}
    </h6>
  );
};

export const Paragraph: React.FC<TypographyProps> = ({
  children,
  className,
  bold,
  medium,
}) => {
  return (
    <p
      className={`text-base text-black ${
        bold ? "font-bold" : medium ? "font-medium" : "font-normal"
      } ${className}`}
    >
      {children}
    </p>
  );
};
