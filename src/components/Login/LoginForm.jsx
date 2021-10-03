import React from "react";
import { Avatar, Button, Typography, Link } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "../../hooks/useStyles";
import LoginInput from "./LoginInput";

const LoginForm = ({ handleSubmit, setEmail, setPassword }) => {
  const styles = useStyles();
  return (
    <form className={styles.loginForm} onSubmit={(e) => handleSubmit(e)}>
      <Avatar className={styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <div>
        <Typography variant="h3" align="center">
          Login
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" align="center" gutterBottom>
          Please login to continue
        </Typography>
      </div>
      <LoginInput
        id="login-email"
        label="Email"
        placeholder="Enter your email"
        type="text"
        validationType="email"
        setState={setEmail}
      />
      <LoginInput
        id="login-password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        validationType="loginpassword"
        setState={setPassword}
      />
      <Button type="submit" color="primary" variant="contained">
        Login
      </Button>
      <Typography>
        <Link href="#">Forgot password ?</Link>
      </Typography>
      <Typography>
        Don't have an account ?<Link href="/register"> Register</Link>
      </Typography>
    </form>
  );
};

export default LoginForm;
