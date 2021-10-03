import React from "react";
import { Grid, Typography } from "@material-ui/core";
import RegisterInput from "./RegisterInput";
const SectionTwo = ({ setSection2Details, section2Details }) => {
  return (
    <>
      <div>
        <Typography variant="h4" align="center">
          Registration
        </Typography>
        <Typography variant="subtitle1" align="center">
          Enter Personal Details
        </Typography>
      </div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
          <RegisterInput
            id="s2Data1"
            label="Data 1"
            placeholder="Enter Data 1"
            type="text"
            validationType="name"
            setState={setSection2Details}
            defaultValue={section2Details.s2Data1}
          />
        </Grid>
        <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
          <RegisterInput
            id="s2Data2"
            label="Data 2"
            placeholder="Enter Data 2"
            type="text"
            validationType="name"
            setState={setSection2Details}
            defaultValue={section2Details.s2Data2}
          />
        </Grid>
        <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
          <RegisterInput
            id="s2Email"
            label="Email"
            placeholder="Enter email"
            type="text"
            validationType="email"
            setState={setSection2Details}
            defaultValue={section2Details.s2Email}
          />
        </Grid>
        <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
          <RegisterInput
            id="s2Phone"
            label="Phone"
            placeholder="Enter phone number"
            type="text"
            validationType="phone"
            setState={setSection2Details}
            defaultValue={section2Details.s2Phone}
          />
        </Grid>
        <Grid item xs={12} sm={6} container justifyContent="center" alignItems="center">
          <RegisterInput
            id="s2Pin"
            label="Pincode"
            placeholder="Enter pincode"
            type="password"
            validationType="pincode"
            setState={setSection2Details}
            defaultValue={section2Details.s2Pin}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SectionTwo;
