import React, { useState } from "react";
import { Typography, Link, Button } from "@material-ui/core";
import useStyles from "../../hooks/useStyles";
import SectionOne from "./SectionOne";
import RegisterButtons from "./RegisterButtons";
import SectionTwo from "./SectionTwo";
import SectionFinish from "./SectionFinish";
import StepIndicator from "./StepIndicator";

const RegisterForm = (props) => {
  const styles = useStyles();

  const [activeStep, setActiveStep] = useState(1);
  return (
    <form className={styles.loginForm} onSubmit={(e) => props.handleSubmit(e)}>
      <StepIndicator activeStep={activeStep} />
      {activeStep === 0 ? (
        <SectionOne
          setSection1Details={props.setSection1Details}
          section1Details={props.section1Details}
        />
      ) : activeStep === 1 ? (
        <SectionTwo
          setSection2Details={props.setSection2Details}
          section2Details={props.section2Details}
        />
      ) : (
        <SectionFinish />
      )}
      <RegisterButtons
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        section1Details={props.section1Details}
        section2Details={props.section2Details}
      />
      <Button type="submit" color="primary" variant="contained">
        Register
      </Button>
      <Typography>
        Already have an account ? <Link href="./login">Login</Link>
      </Typography>
    </form>
  );
};

export default RegisterForm;
