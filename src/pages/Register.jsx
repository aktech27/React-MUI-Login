import React, { useState } from "react";
import useStyles from "../hooks/useStyles";
import { Grid, Paper } from "@material-ui/core";
import { RegisterForm } from "../components";

const Register = () => {
  const styles = useStyles();
  const [section1Details, setSection1Details] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [section2Details, setSection2Details] = useState({
    s2Data1: "",
    s2Data2: "",
    s2Email: "",
    s2Phone: "",
    s2Pin: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(section1Details);
    console.log(section2Details);
  };
  return (
    <Grid container justifyContent="center" alignItems="center" className={styles.container}>
      <Paper elevation={15} className={styles.registerContainer}>
        <RegisterForm
          handleSubmit={handleSubmit}
          setSection1Details={setSection1Details}
          section1Details={section1Details}
          setSection2Details={setSection2Details}
          section2Details={section2Details}
        />
      </Paper>
    </Grid>
  );
};

export default Register;
