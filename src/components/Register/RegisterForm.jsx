import React, { useState } from "react";
import { Typography, Link, Button, createTheme, ThemeProvider } from "@material-ui/core";
import useStyles from "../../hooks/useStyles";
import SectionOne from "./SectionOne";
import RegisterButtons from "./RegisterButtons";
import SectionTwo from "./SectionTwo";
import SectionFinish from "./SectionFinish";
import StepIndicator from "./StepIndicator";

const RegisterForm = (props) => {
  const styles = useStyles();

  const [activeStep, setActiveStep] = useState(0);

  const theme = createTheme({
    overrides: {
      MuiStepIcon: {
        active: {
          color: "#00c853 !important",
        },
        completed: {
          color: "#00c853 !important",
        },
      },
      MuiStepConnector: {
        alternativeLabel: {
          top: 10,
          left: "calc(-50% + 16px)",
          right: "calc(50% + 16px)",
        },
        active: {
          "& $line": {
            borderColor: "#00c853",
          },
        },
        completed: {
          "& $line": {
            borderColor: "#00c853",
          },
        },
        lineHorizontal: {
          borderColor: "#bdbdbd",
          borderTopWidth: "3px",
          borderRadius: 1,
        },
      },
    },
  });
  return (
    <form className={styles.loginForm} onSubmit={(e) => props.handleSubmit(e)}>
      <ThemeProvider theme={theme}>
        <StepIndicator activeStep={activeStep} />
      </ThemeProvider>
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
