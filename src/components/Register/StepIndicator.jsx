import React from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
const StepIndicator = ({ activeStep }) => {
  return (
    <Stepper
      activeStep={activeStep}
      style={{ width: "90%", backgroundColor: "transparent" }}
      alternativeLabel
    >
      <Step>
        <StepLabel>Section 1</StepLabel>
      </Step>
      <Step>
        <StepLabel>Section 2</StepLabel>
      </Step>
      <Step>
        <StepLabel>Finish</StepLabel>
      </Step>
    </Stepper>
  );
};

export default StepIndicator;
