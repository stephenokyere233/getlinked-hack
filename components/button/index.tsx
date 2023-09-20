import React, { ButtonHTMLAttributes, FC } from "react";

const Button: FC<{ label: string; props?: ButtonHTMLAttributes<HTMLButtonElement>|any }> = ({
  label,
  ...props
}) => {
  return (
    <button className="bg-primary-gradient w-max px-10 rounded-md py-3 text-white" {...props}>
      {label}
    </button>
  );
};

export default Button;
