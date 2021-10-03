import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import useValidator from "../../hooks/useValidator";

const LoginInput = ({ id, label, placeholder, type, validationType, setState }) => {
  const [helperText, setHelperText] = useState("");
  let validator = useValidator(validationType);
  const handleChange = (value) => {
    let [isValid, validationText] = validator(value);
    if (isValid) {
      setState(value);
      setHelperText("");
    } else {
      setHelperText(validationText);
      setState("");
    }
  };
  return (
    <TextField
      id={id}
      label={label}
      placeholder={placeholder}
      type={type}
      variant="outlined"
      style={{ width: "70%" }}
      error={helperText ? true : false}
      helperText={helperText}
      onFocus={(e) => {
        handleChange(e.target.value);
      }}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    />
  );
};

export default LoginInput;
