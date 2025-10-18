import classes from "./checkOutInputs.module.css";
import React from "react";

interface props {
  id: string;
  name: string;
  label: string;
  type?: string;
  value: string | number;
  required?: boolean;
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id,
  name,
  label,
  required = false,
  type = "text",
  value,
  onchange,
}: props) {
  return (
    <div className={classes["input-group"]}>
      <label htmlFor={id} className={classes["input-label"]}>
        {label}
        {required && <span className={classes.required_star}>*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        required={required}
        name={name}
        onChange={(e) => onchange(e)}
        className={`bg-secondary ${classes["form-input"]}`}
      />
    </div>
  );
}
