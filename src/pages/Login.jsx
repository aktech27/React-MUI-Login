import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import useStyles from "../hooks/useStyles";
import { LoginForm } from "../components";

const Login = () => {
  const styles = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Paper elevation={15}>
      <LoginForm setEmail={setEmail} setPassword={setPassword} />
    </Paper>
  );
};

export default Login;
