import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import useStyles from "../hooks/useStyles";
import { LoginForm } from "../components";

const Login = () => {
  const styles = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log(email, password);
    }
    if (!password) document.querySelector("#login-password").focus();
    if (!email) document.querySelector("#login-email").focus();
  };
  return (
    <Grid container justifyContent="center" alignItems="center" className={styles.container}>
      <Grid item xs={11} sm={8} md={5} lg={4} xl={3}>
        <Paper elevation={15} className={styles.loginContainer}>
          <LoginForm handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
