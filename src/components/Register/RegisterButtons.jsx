import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "../../hooks/useStyles";

const RegisterButtons = ({ activeStep, setActiveStep, section1Details, section2Details }) => {
  const handleClick = () => {
    let tempArray = [];
    let details = activeStep ? section2Details : section1Details;
    for (let i in details) {
      if (details[i] === "") tempArray.push(i); //push only the keys  with invalid data
    }
    //all valid, go to next section
    if (!tempArray.length) return setActiveStep((prev) => prev + 1);
    else document.querySelector(`#${tempArray[0]}`).focus(); //id of the input field is same as the key
  };
  const styles = useStyles();
  return (
    <div className={styles.registerButtons}>
      <Button
        disabled={!activeStep}
        onClick={() => {
          setActiveStep((prev) => prev - 1);
        }}
        color="primary"
        variant="contained"
      >
        Back
      </Button>
      <Button disabled={activeStep === 2} onClick={handleClick} color="primary" variant="contained">
        Next
      </Button>
    </div>
  );
};

export default RegisterButtons;
