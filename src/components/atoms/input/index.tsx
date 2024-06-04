import React, { useState } from "react";

type InputProps = {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  id?: string;
  parentDivClassName?: string;
  className?: string;
  style?: React.CSSProperties;
  floatingLabel?: boolean;
};

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  id,
  parentDivClassName,
  className,
  style = {},
  floatingLabel = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`relative ${parentDivClassName}`}>
      {floatingLabel && (
        <label
          htmlFor={id}
          className={`absolute left-2 px-1 pt-1 bg-white transition-all duration-200 ${
            isFocused || value ? "text-xs -top-2.5" : "text-base top-2.5"
          } text-gray-400 pointer-events-none
          }`}
        >
          {placeholder}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={floatingLabel ? "" : placeholder}
        id={id}
        className={`p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary ${
          floatingLabel ? "pt-4 pb-2" : ""
        } ${className}`}
        style={{ ...style }}
      />
    </div>
  );
};

export default Input;
