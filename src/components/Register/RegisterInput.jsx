import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import useValidator from "../../hooks/useValidator";

const RegisterInput = ({
  id,
  label,
  placeholder,
  type,
  validationType,
  setState,
  defaultValue,
}) => {
  const [helperText, setHelperText] = useState("");
  let validator = useValidator(validationType);
  const handleChange = (value) => {
    //checking if validation type is confirm password and passing parameters respectively
    let [isValid, validationText] =
      validationType !== "confirmpassword"
        ? validator(value)
        : validator(value, document.querySelector("#password").value);
    if (!isValid) {
      setHelperText(validationText);
      setState((prev) => ({ ...prev, [id]: "" }));
    } else {
      setState((prev) => ({ ...prev, [id]: value }));
      setHelperText("");
    }
  };

  return (
    <TextField
      id={id}
      label={label}
      placeholder={placeholder}
      type={type}
      defaultValue={defaultValue}
      variant="outlined"
      style={{ margin: "10px", width: "90%" }}
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

export default RegisterInput;
